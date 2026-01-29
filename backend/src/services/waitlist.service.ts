import prisma from "../config/database";

class WaitlistService {
  async joinWaitlist(
    userId: string,
    appointmentTypeId: string,
    locationId: string,
    preferredDateStart?: string,
    preferredDateEnd?: string,
    notes?: string,
  ) {
    // Check if user already has an active booking
    const existingBooking = await prisma.booking.findFirst({
      where: {
        userId,
        status: "CONFIRMED",
      },
    });

    if (existingBooking) {
      throw new Error("You already have an active booking");
    }

    // Check if user is already on waitlist for this location/appointment type
    const existingWaitlist = await prisma.waitlist.findFirst({
      where: {
        userId,
        appointmentTypeId,
        locationId,
        status: {in: ["WAITING", "NOTIFIED"]},
      },
    });

    if (existingWaitlist) {
      throw new Error(
        "You are already on the waitlist for this appointment type and location",
      );
    }

    // Get current waitlist position
    const currentCount = await prisma.waitlist.count({
      where: {
        appointmentTypeId,
        locationId,
        status: "WAITING",
      },
    });

    // Create waitlist entry
    const waitlistEntry = await prisma.waitlist.create({
      data: {
        userId,
        appointmentTypeId,
        locationId,
        preferredDateStart: preferredDateStart
          ? new Date(preferredDateStart)
          : undefined,
        preferredDateEnd: preferredDateEnd
          ? new Date(preferredDateEnd)
          : undefined,
        notes,
        position: currentCount + 1,
        status: "WAITING",
      },
      include: {
        appointmentType: true,
        location: true,
      },
    });

    return waitlistEntry;
  }

  async getUserWaitlistEntries(userId: string) {
    return await prisma.waitlist.findMany({
      where: {userId},
      include: {
        appointmentType: true,
        location: true,
      },
      orderBy: {
        joinedAt: "desc",
      },
    });
  }

  async getWaitlistPosition(waitlistId: string, userId: string) {
    const entry = await prisma.waitlist.findUnique({
      where: {id: waitlistId},
      include: {
        appointmentType: true,
        location: true,
      },
    });

    if (!entry) {
      throw new Error("Waitlist entry not found");
    }

    if (entry.userId !== userId) {
      throw new Error("You can only view your own waitlist entries");
    }

    // Calculate current position
    const position = await prisma.waitlist.count({
      where: {
        appointmentTypeId: entry.appointmentTypeId,
        locationId: entry.locationId,
        status: "WAITING",
        joinedAt: {lte: entry.joinedAt},
      },
    });

    return {
      ...entry,
      currentPosition: position,
    };
  }

  async updateWaitlistEntry(
    waitlistId: string,
    userId: string,
    data: {
      preferredDateStart?: string;
      preferredDateEnd?: string;
      notes?: string;
    },
  ) {
    const entry = await prisma.waitlist.findUnique({
      where: {id: waitlistId},
    });

    if (!entry) {
      throw new Error("Waitlist entry not found");
    }

    if (entry.userId !== userId) {
      throw new Error("You can only update your own waitlist entries");
    }

    if (entry.status !== "WAITING") {
      throw new Error("Can only update waiting entries");
    }

    return await prisma.waitlist.update({
      where: {id: waitlistId},
      data: {
        preferredDateStart: data.preferredDateStart
          ? new Date(data.preferredDateStart)
          : undefined,
        preferredDateEnd: data.preferredDateEnd
          ? new Date(data.preferredDateEnd)
          : undefined,
        notes: data.notes,
      },
      include: {
        appointmentType: true,
        location: true,
      },
    });
  }

  async removeFromWaitlist(waitlistId: string, userId: string) {
    const entry = await prisma.waitlist.findUnique({
      where: {id: waitlistId},
    });

    if (!entry) {
      throw new Error("Waitlist entry not found");
    }

    if (entry.userId !== userId) {
      throw new Error("You can only remove your own waitlist entries");
    }

    // Update status to cancelled instead of deleting
    return await prisma.waitlist.update({
      where: {id: waitlistId},
      data: {
        status: "CANCELLED",
      },
    });
  }

  // Admin function to get all waitlist entries
  async getAllWaitlistEntries(filters?: {
    locationId?: string;
    appointmentTypeId?: string;
    status?: string;
  }) {
    const where: any = {};

    if (filters?.locationId) {
      where.locationId = filters.locationId;
    }
    if (filters?.appointmentTypeId) {
      where.appointmentTypeId = filters.appointmentTypeId;
    }
    if (filters?.status) {
      where.status = filters.status;
    }

    return await prisma.waitlist.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
          },
        },
        appointmentType: true,
        location: true,
      },
      orderBy: {
        joinedAt: "asc",
      },
    });
  }
}

export default new WaitlistService();
