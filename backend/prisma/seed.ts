import * as bcrypt from "bcrypt";
import prisma from "../src/config/database";

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: {email: "admin@example.com"},
    update: {},
    create: {
      email: "admin@example.com",
      password: adminPassword,
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
    },
  });

  console.log("Admin user created:", admin.email);

  // Create appointment types
  const appointmentTypes = [
    {
      typeName: "Driver's License Renewal",
      description: "Renew your existing driver's license",
      durationMinutes: 20,
    },
    {
      typeName: "First Time License",
      description: "Apply for your first driver's license",
      durationMinutes: 45,
    },
    {
      typeName: "Vehicle Registration",
      description: "Register your vehicle",
      durationMinutes: 15,
    },
    {
      typeName: "CDL Test",
      description: "Commercial driver's license testing",
      durationMinutes: 60,
    },
  ];

  for (const type of appointmentTypes) {
    await prisma.appointmentType.upsert({
      where: {typeName: type.typeName},
      update: {},
      create: type,
    });
  }

  console.log("Appointment types created");

  // Create locations
  const locations = [
    {
      locationName: "Downtown DMV",
      addressLine1: "123 Main Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62701",
      phoneNumber: "(555) 123-4567",
      email: "downtown@dmv.gov",
    },
    {
      locationName: "North Side DMV",
      addressLine1: "456 Oak Avenue",
      city: "Springfield",
      state: "IL",
      zipCode: "62702",
      phoneNumber: "(555) 987-6543",
      email: "northside@dmv.gov",
    },
  ];

  for (const location of locations) {
    await prisma.location.upsert({
      where: {locationName: location.locationName},
      update: {},
      create: location,
    });
  }

  console.log("Locations created");

  // Link appointment types to locations and create slot configurations
  const allLocations = await prisma.location.findMany();
  const allAppointmentTypes = await prisma.appointmentType.findMany();

  for (const location of allLocations) {
    for (const appointmentType of allAppointmentTypes) {
      // Create link
      await prisma.locationAppointmentType.upsert({
        where: {
          locationId_appointmentTypeId: {
            locationId: location.id,
            appointmentTypeId: appointmentType.id,
          },
        },
        update: {},
        create: {
          locationId: location.id,
          appointmentTypeId: appointmentType.id,
        },
      });

      // Create slot configuration
      await prisma.slotConfiguration.upsert({
        where: {
          locationId_appointmentTypeId: {
            locationId: location.id,
            appointmentTypeId: appointmentType.id,
          },
        },
        update: {},
        create: {
          locationId: location.id,
          appointmentTypeId: appointmentType.id,
          availableDays: [1, 2, 3, 4, 5], // Monday to Friday
          startTime: "09:00:00",
          endTime: "17:00:00",
          slotDurationMinutes: appointmentType.durationMinutes,
          slotsPerInterval: 3,
          bufferTimeMinutes: 5,
          advanceBookingDays: 60,
          sameDayBookingCutoffHours: 2,
          minAdvanceBookingHours: 4,
        },
      });
    }
  }

  console.log("Location-Appointment links and slot configurations created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
