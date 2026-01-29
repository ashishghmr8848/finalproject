import prisma from "../config/database";

interface SlotInfo {
  date: string;
  time: string;
  availableCapacity: number;
  totalCapacity: number;
}

class BookingService {
  // Get available slots for a location and appointment type
  async getAvailableSlots(
    locationId: string,
    appointmentTypeId: string,
    startDate: string,
    endDate: string,
  ): Promise<SlotInfo[]> {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Get slot configuration
    const config = await prisma.slotConfiguration.findUnique({
      where: {
        locationId_appointmentTypeId: {
          locationId,
          appointmentTypeId,
        },
      },
    });

    if (!config || !config.isActive) {
      return [];
    }

    const availableSlots: SlotInfo[] = [];
    const currentDate = new Date(start);

    // Generate slots for each day in range
    while (currentDate <= end) {
      const dayOfWeek = currentDate.getDay();

      // Check if this day is available
      if (!config.availableDays.includes(dayOfWeek)) {
        currentDate.setDate(currentDate.getDate() + 1);
        continue;
      }

      // Check for special dates (holidays, closures)
      const specialDate = await this.checkSpecialDate(
        locationId,
        appointmentTypeId,
        currentDate,
      );

      if (specialDate?.isClosed) {
        currentDate.setDate(currentDate.getDate() + 1);
        continue;
      }

      // Get time range (use modified hours if applicable)
      let startTime = config.startTime;
      let endTime = config.endTime;

      if (specialDate?.dateType === "MODIFIED_HOURS") {
        startTime = specialDate.modifiedStartTime || startTime;
        endTime = specialDate.modifiedEndTime || endTime;
      }

      // Generate time slots for this day
      const daySlots = await this.generateTimeSlotsForDay(
        locationId,
        appointmentTypeId,
        currentDate,
        startTime,
        endTime,
        config,
      );

      availableSlots.push(...daySlots);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return availableSlots;
  }

  async generateTimeSlotsForDay(
    locationId: string,
    appointmentTypeId: string,
    date: Date,
    startTime: string,
    endTime: string,
    config: any,
  ): Promise<SlotInfo[]> {
    const slots: SlotInfo[] = [];
    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);

    const slotStart = new Date(date);
    slotStart.setHours(startHour, startMin, 0, 0);

    const slotEnd = new Date(date);
    slotEnd.setHours(endHour, endMin, 0, 0);

    const intervalMs =
      (config.slotDurationMinutes + config.bufferTimeMinutes) * 60 * 1000;

    let currentSlot = new Date(slotStart);

    while (currentSlot < slotEnd) {
      const slotTime = currentSlot.toTimeString().substring(0, 8);

      // Check if slot is in the future
      const now = new Date();
      const cutoffTime = new Date(
        now.getTime() + config.sameDayBookingCutoffHours * 60 * 60 * 1000,
      );

      if (currentSlot <= cutoffTime) {
        currentSlot = new Date(currentSlot.getTime() + intervalMs);
        continue;
      }

      // Check if slot is blocked
      const isBlocked = await this.isSlotBlocked(
        locationId,
        appointmentTypeId,
        date,
        slotTime,
      );

      if (isBlocked) {
        currentSlot = new Date(currentSlot.getTime() + intervalMs);
        continue;
      }

      // Count existing bookings
      const bookingCount = await prisma.booking.count({
        where: {
          locationId,
          appointmentTypeId,
          appointmentDate: date,
          appointmentTime: slotTime,
          status: "CONFIRMED",
        },
      });

      const availableCapacity = config.slotsPerInterval - bookingCount;

      if (availableCapacity > 0) {
        slots.push({
          date: date.toISOString().split("T")[0],
          time: slotTime,
          availableCapacity,
          totalCapacity: config.slotsPerInterval,
        });
      }

      currentSlot = new Date(currentSlot.getTime() + intervalMs);
    }

    return slots;
  }

  async checkSpecialDate(
    locationId: string,
    appointmentTypeId: string,
    date: Date,
  ) {
    const specialDate = await prisma.specialDate.findFirst({
      where: {
        date: date,
        OR: [
          {locationId, appointmentTypeId},
          {locationId, appliesToAllAppointmentTypes: true},
          {appliesToAllLocations: true, appointmentTypeId},
          {appliesToAllLocations: true, appliesToAllAppointmentTypes: true},
        ],
      },
    });

    return specialDate;
  }

  async isSlotBlocked(
    locationId: string,
    appointmentTypeId: string,
    date: Date,
    time: string,
  ): Promise<boolean> {
    const blockedSlot = await prisma.blockedSlot.findFirst({
      where: {
        locationId,
        blockedDate: date,
        blockedStartTime: {lte: time},
        blockedEndTime: {gt: time},
        OR: [{appointmentTypeId}, {appliesToAllAppointmentTypes: true}],
      },
    });

    return !!blockedSlot;
  }

  // Check if a specific slot is available
  async isSlotAvailable(
    locationId: string,
    appointmentTypeId: string,
    date: string,
    time: string,
  ): Promise<boolean> {
    // Get configuration
    const config = await prisma.slotConfiguration.findUnique({
      where: {
        locationId_appointmentTypeId: {
          locationId,
          appointmentTypeId,
        },
      },
    });

    if (!config || !config.isActive) {
      return false;
    }

    // Check day of week
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay();
    if (!config.availableDays.includes(dayOfWeek)) {
      return false;
    }

    // Check if in time range
    if (time < config.startTime || time >= config.endTime) {
      return false;
    }

    // Check special dates
    const specialDate = await this.checkSpecialDate(
      locationId,
      appointmentTypeId,
      dateObj,
    );
    if (specialDate?.isClosed) {
      return false;
    }

    // Check if blocked
    const isBlocked = await this.isSlotBlocked(
      locationId,
      appointmentTypeId,
      dateObj,
      time,
    );
    if (isBlocked) {
      return false;
    }

    // Check minimum advance booking time
    const slotDateTime = new Date(`${date}T${time}`);
    const minBookingTime = new Date(
      Date.now() + config.minAdvanceBookingHours * 60 * 60 * 1000,
    );
    if (slotDateTime < minBookingTime) {
      return false;
    }

    // Count bookings
    const bookingCount = await prisma.booking.count({
      where: {
        locationId,
        appointmentTypeId,
        appointmentDate: dateObj,
        appointmentTime: time,
        status: "CONFIRMED",
      },
    });

    return bookingCount < config.slotsPerInterval;
  }

  // Book an appointment slot
  async bookAppointmentSlot(
    userId: string,
    appointmentTypeId: string,
    locationId: string,
    date: string,
    time: string,
    notes?: string,
  ) {
    // Start transaction
    return await prisma.$transaction(async (tx) => {
      // Check if user already has an active booking
      const existingBooking = await tx.booking.findFirst({
        where: {
          userId,
          status: "CONFIRMED",
        },
      });

      if (existingBooking) {
        throw new Error("You already have an active booking");
      }

      // Check availability
      const isAvailable = await this.isSlotAvailable(
        locationId,
        appointmentTypeId,
        date,
        time,
      );

      if (!isAvailable) {
        throw new Error("This time slot is no longer available");
      }

      // Create booking
      const booking = await tx.booking.create({
        data: {
          userId,
          appointmentTypeId,
          locationId,
          appointmentDate: new Date(date),
          appointmentTime: time,
          notes,
          status: "CONFIRMED",
        },
        include: {
          appointmentType: true,
          location: true,
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              phoneNumber: true,
            },
          },
        },
      });

      // TODO: Send confirmation email
      // await emailService.sendBookingConfirmation(booking);

      // Check waitlist and notify next person
      await this.processWaitlistForSlot(
        locationId,
        appointmentTypeId,
        new Date(date),
        time,
      );

      return booking;
    });
  }

  // Cancel a booking
  async cancelBooking(
    bookingId: string,
    userId: string,
    cancelledBy: "USER" | "ADMIN",
    reason?: string,
  ) {
    const booking = await prisma.booking.findUnique({
      where: {id: bookingId},
      include: {
        user: true,
        appointmentType: true,
        location: true,
      },
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    // Check authorization
    if (cancelledBy === "USER" && booking.userId !== userId) {
      throw new Error("You can only cancel your own bookings");
    }

    if (booking.status === "CANCELLED") {
      throw new Error("This booking is already cancelled");
    }

    if (booking.status !== "CONFIRMED") {
      throw new Error("Only confirmed bookings can be cancelled");
    }

    // Update booking
    const updatedBooking = await prisma.booking.update({
      where: {id: bookingId},
      data: {
        status: "CANCELLED",
        cancellationDate: new Date(),
        cancelledBy: cancelledBy,
        cancellationReason: reason,
      },
    });

    // TODO: Send cancellation email
    // await emailService.sendCancellationConfirmation(updatedBooking);

    // Notify waitlist
    await this.processWaitlistForSlot(
      booking.locationId,
      booking.appointmentTypeId,
      booking.appointmentDate,
      booking.appointmentTime,
    );

    return updatedBooking;
  }

  async processWaitlistForSlot(
    locationId: string,
    appointmentTypeId: string,
    date: Date,
    time: string,
  ) {
    // Find users in waitlist for this slot
    const waitlistEntries = await prisma.waitlist.findMany({
      where: {
        locationId,
        appointmentTypeId,
        status: "WAITING",
        OR: [
          {
            AND: [
              {preferredDateStart: {lte: date}},
              {preferredDateEnd: {gte: date}},
            ],
          },
          {
            preferredDateStart: null,
            preferredDateEnd: null,
          },
        ],
      },
      orderBy: {
        joinedAt: "asc",
      },
      include: {
        user: true,
      },
      take: 1,
    });

    if (waitlistEntries.length > 0) {
      const waitlistEntry = waitlistEntries[0];

      // Update waitlist status
      await prisma.waitlist.update({
        where: {id: waitlistEntry.id},
        data: {
          status: "NOTIFIED",
          notifiedAt: new Date(),
          notificationCount: waitlistEntry.notificationCount + 1,
        },
      });

      // TODO: Send notification email
      // await emailService.sendWaitlistNotification(waitlistEntry, date, time);
    }
  }

  // Get user's bookings
  async getUserBookings(userId: string, status?: string) {
    const where: any = {userId};
    if (status) {
      where.status = status;
    }

    return await prisma.booking.findMany({
      where,
      include: {
        appointmentType: true,
        location: true,
      },
      orderBy: {
        appointmentDate: "desc",
      },
    });
  }

  // Get single booking
  async getBookingById(bookingId: string, userId?: string) {
    const booking = await prisma.booking.findUnique({
      where: {id: bookingId},
      include: {
        appointmentType: true,
        location: true,
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    // If userId is provided, check authorization
    if (userId && booking.userId !== userId) {
      throw new Error("You can only view your own bookings");
    }

    return booking;
  }
}

export default new BookingService();
