import {addDays, format, isSameDay, addMinutes} from "date-fns";
import prisma from "../config/database";

interface AVAILABLE_SLOT_QUERY {
  locationId: string;
  appointmentTypeId: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
}

interface SlotResult {
  date: string;
  time: string;
  availableCapacity: number;
  totalCapacity: number;
}

export const getAvailableSlots = async (
  params: AVAILABLE_SLOT_QUERY,
): Promise<SlotResult[]> => {
  const {locationId, appointmentTypeId, startDate, endDate} = params;

  // 1. Get Configuration
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

  // 2. key dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 3. Fetch related data
  const specialDates = await prisma.specialDate.findMany({
    where: {
      date: {
        gte: start,
        lte: end,
      },
      OR: [
        {locationId: null, appointmentTypeId: null}, // Global
        {locationId: locationId},
        {appointmentTypeId: appointmentTypeId},
      ],
    },
  });

  const blockedSlots = await prisma.blockedSlot.findMany({
    where: {
      blockedDate: {
        gte: start,
        lte: end,
      },
      OR: [{locationId: locationId}, {appointmentTypeId: appointmentTypeId}],
    },
  });

  const bookings = await prisma.booking.findMany({
    where: {
      locationId,
      appointmentTypeId,
      appointmentDate: {
        gte: start,
        lte: end,
      },
      status: "CONFIRMED",
    },
  });

  const results: SlotResult[] = [];
  let currentDate = start;

  while (currentDate <= end) {
    // Check if day is enabled in config
    const dayOfWeek = currentDate.getDay(); // 0-6
    if (!config.availableDays.includes(dayOfWeek)) {
      currentDate = addDays(currentDate, 1);
      continue;
    }

    // Check special dates
    const specialDate = specialDates.find((sd) =>
      isSameDay(sd.date, currentDate),
    );

    if (specialDate && specialDate.isClosed) {
      currentDate = addDays(currentDate, 1);
      continue;
    }

    let dayStartTime = config.startTime;
    let dayEndTime = config.endTime;

    if (specialDate && specialDate.dateType === "MODIFIED_HOURS") {
      if (specialDate.modifiedStartTime)
        dayStartTime = specialDate.modifiedStartTime;
      if (specialDate.modifiedEndTime) dayEndTime = specialDate.modifiedEndTime;
    }

    // Generate slots
    const [startHour, startMinute] = dayStartTime.split(":").map(Number);
    const [endHour, endMinute] = dayEndTime.split(":").map(Number);

    // Create Date objects for time comparison on this specific day
    let currentSlotTime = new Date(currentDate);
    currentSlotTime.setHours(startHour, startMinute, 0, 0);

    const dayEndDateTime = new Date(currentDate);
    dayEndDateTime.setHours(endHour, endMinute, 0, 0);

    while (currentSlotTime < dayEndDateTime) {
      // Calculate slot end time
      const slotEndTime = addMinutes(
        currentSlotTime,
        config.slotDurationMinutes,
      );
      if (slotEndTime > dayEndDateTime) break;

      const timeString = format(currentSlotTime, "HH:mm:ss");

      // Check Blocked Slots
      const isBlocked = blockedSlots.some((blocked) => {
        if (!isSameDay(blocked.blockedDate, currentDate)) return false;
        // Simple string comparison for times works if format is HH:mm:ss consistent
        return (
          timeString >= blocked.blockedStartTime &&
          timeString < blocked.blockedEndTime
        );
      });

      if (isBlocked) {
        currentSlotTime = addMinutes(
          currentSlotTime,
          config.slotDurationMinutes,
        );
        continue;
      }

      // Count Bookings
      const bookingCount = bookings.filter(
        (b) =>
          isSameDay(b.appointmentDate, currentDate) &&
          b.appointmentTime === timeString,
      ).length;

      const availableCapacity = config.slotsPerInterval - bookingCount;

      if (availableCapacity > 0) {
        results.push({
          date: format(currentDate, "yyyy-MM-dd"),
          time: timeString,
          availableCapacity,
          totalCapacity: config.slotsPerInterval,
        });
      }

      currentSlotTime = addMinutes(currentSlotTime, config.slotDurationMinutes);
    }

    currentDate = addDays(currentDate, 1);
  }

  return results;
};

// Admin services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const createSlotConfiguration = async (data: any) => {
//   return prisma.slotConfiguration.create({data});
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const updateSlotConfiguration = async (id: string, data: any) => {
//   return prisma.slotConfiguration.update({where: {id}, data});
// };

// export const getSlotConfigurations = async () => {
//   return prisma.slotConfiguration.findMany({
//     include: {location: true, appointmentType: true},
//   });
// };

// export const getSlotConfiguration = async (
//   locationId: string,
//   appointmentTypeId: string,
// ) => {
//   return prisma.slotConfiguration.findUnique({
//     where: {locationId_appointmentTypeId: {locationId, appointmentTypeId}},
//   });
// };
