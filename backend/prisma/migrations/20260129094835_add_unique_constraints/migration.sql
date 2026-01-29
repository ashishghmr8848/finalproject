-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "SpecialDateType" AS ENUM ('HOLIDAY', 'CLOSURE', 'MODIFIED_HOURS');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('CONFIRMED', 'CANCELLED', 'COMPLETED', 'NO_SHOW');

-- CreateEnum
CREATE TYPE "CancelledBy" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "WaitlistStatus" AS ENUM ('WAITING', 'NOTIFIED', 'BOOKED', 'EXPIRED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "EmailType" AS ENUM ('BOOKING_CONFIRMATION', 'CANCELLATION_CONFIRMATION', 'WAITLIST_NOTIFICATION', 'REMINDER', 'SLOT_AVAILABLE');

-- CreateEnum
CREATE TYPE "EmailStatus" AS ENUM ('PENDING', 'SENT', 'FAILED', 'BOUNCED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "driverLicenseNumber" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "resetPasswordToken" TEXT,
    "resetPasswordExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppointmentType" (
    "id" TEXT NOT NULL,
    "typeName" TEXT NOT NULL,
    "description" TEXT,
    "durationMinutes" INTEGER NOT NULL DEFAULT 30,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppointmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationAppointmentType" (
    "id" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "appointmentTypeId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LocationAppointmentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SlotConfiguration" (
    "id" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "appointmentTypeId" TEXT NOT NULL,
    "availableDays" INTEGER[],
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "slotDurationMinutes" INTEGER NOT NULL DEFAULT 30,
    "slotsPerInterval" INTEGER NOT NULL DEFAULT 1,
    "bufferTimeMinutes" INTEGER NOT NULL DEFAULT 0,
    "advanceBookingDays" INTEGER NOT NULL DEFAULT 90,
    "sameDayBookingCutoffHours" INTEGER NOT NULL DEFAULT 2,
    "minAdvanceBookingHours" INTEGER NOT NULL DEFAULT 24,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SlotConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecialDate" (
    "id" TEXT NOT NULL,
    "locationId" TEXT,
    "appointmentTypeId" TEXT,
    "date" DATE NOT NULL,
    "dateType" "SpecialDateType" NOT NULL,
    "reason" TEXT,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "modifiedStartTime" TEXT,
    "modifiedEndTime" TEXT,
    "appliesToAllLocations" BOOLEAN NOT NULL DEFAULT false,
    "appliesToAllAppointmentTypes" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpecialDate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockedSlot" (
    "id" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "appointmentTypeId" TEXT,
    "blockedDate" DATE NOT NULL,
    "blockedStartTime" TEXT NOT NULL,
    "blockedEndTime" TEXT NOT NULL,
    "reason" TEXT,
    "appliesToAllAppointmentTypes" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlockedSlot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "appointmentTypeId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "bookingReference" TEXT NOT NULL,
    "appointmentDate" DATE NOT NULL,
    "appointmentTime" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'CONFIRMED',
    "bookingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancellationDate" TIMESTAMP(3),
    "cancelledBy" "CancelledBy",
    "cancellationReason" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waitlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "appointmentTypeId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "preferredDateStart" DATE,
    "preferredDateEnd" DATE,
    "status" "WaitlistStatus" NOT NULL DEFAULT 'WAITING',
    "position" INTEGER,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notifiedAt" TIMESTAMP(3),
    "notificationCount" INTEGER NOT NULL DEFAULT 0,
    "expiresAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailNotification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "emailType" "EmailType" NOT NULL,
    "recipientEmail" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "status" "EmailStatus" NOT NULL DEFAULT 'PENDING',
    "sentAt" TIMESTAMP(3),
    "bookingId" TEXT,
    "waitlistId" TEXT,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailNotification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AppointmentType_typeName_key" ON "AppointmentType"("typeName");

-- CreateIndex
CREATE INDEX "AppointmentType_isActive_idx" ON "AppointmentType"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "Location_locationName_key" ON "Location"("locationName");

-- CreateIndex
CREATE INDEX "Location_isActive_idx" ON "Location"("isActive");

-- CreateIndex
CREATE INDEX "Location_city_state_idx" ON "Location"("city", "state");

-- CreateIndex
CREATE INDEX "LocationAppointmentType_locationId_idx" ON "LocationAppointmentType"("locationId");

-- CreateIndex
CREATE INDEX "LocationAppointmentType_appointmentTypeId_idx" ON "LocationAppointmentType"("appointmentTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "LocationAppointmentType_locationId_appointmentTypeId_key" ON "LocationAppointmentType"("locationId", "appointmentTypeId");

-- CreateIndex
CREATE INDEX "SlotConfiguration_locationId_idx" ON "SlotConfiguration"("locationId");

-- CreateIndex
CREATE INDEX "SlotConfiguration_appointmentTypeId_idx" ON "SlotConfiguration"("appointmentTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "SlotConfiguration_locationId_appointmentTypeId_key" ON "SlotConfiguration"("locationId", "appointmentTypeId");

-- CreateIndex
CREATE INDEX "SpecialDate_date_idx" ON "SpecialDate"("date");

-- CreateIndex
CREATE INDEX "SpecialDate_locationId_idx" ON "SpecialDate"("locationId");

-- CreateIndex
CREATE INDEX "SpecialDate_appointmentTypeId_idx" ON "SpecialDate"("appointmentTypeId");

-- CreateIndex
CREATE INDEX "BlockedSlot_locationId_blockedDate_idx" ON "BlockedSlot"("locationId", "blockedDate");

-- CreateIndex
CREATE INDEX "BlockedSlot_appointmentTypeId_idx" ON "BlockedSlot"("appointmentTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_bookingReference_key" ON "Booking"("bookingReference");

-- CreateIndex
CREATE INDEX "Booking_userId_idx" ON "Booking"("userId");

-- CreateIndex
CREATE INDEX "Booking_locationId_appointmentDate_idx" ON "Booking"("locationId", "appointmentDate");

-- CreateIndex
CREATE INDEX "Booking_appointmentTypeId_appointmentDate_idx" ON "Booking"("appointmentTypeId", "appointmentDate");

-- CreateIndex
CREATE INDEX "Booking_status_idx" ON "Booking"("status");

-- CreateIndex
CREATE INDEX "Booking_bookingReference_idx" ON "Booking"("bookingReference");

-- CreateIndex
CREATE INDEX "Booking_locationId_appointmentTypeId_appointmentDate_appoin_idx" ON "Booking"("locationId", "appointmentTypeId", "appointmentDate", "appointmentTime", "status");

-- CreateIndex
CREATE INDEX "Waitlist_userId_idx" ON "Waitlist"("userId");

-- CreateIndex
CREATE INDEX "Waitlist_status_idx" ON "Waitlist"("status");

-- CreateIndex
CREATE INDEX "Waitlist_appointmentTypeId_locationId_idx" ON "Waitlist"("appointmentTypeId", "locationId");

-- CreateIndex
CREATE INDEX "Waitlist_joinedAt_idx" ON "Waitlist"("joinedAt");

-- CreateIndex
CREATE INDEX "EmailNotification_userId_idx" ON "EmailNotification"("userId");

-- CreateIndex
CREATE INDEX "EmailNotification_status_idx" ON "EmailNotification"("status");

-- CreateIndex
CREATE INDEX "EmailNotification_emailType_idx" ON "EmailNotification"("emailType");

-- CreateIndex
CREATE INDEX "EmailNotification_sentAt_idx" ON "EmailNotification"("sentAt");

-- AddForeignKey
ALTER TABLE "LocationAppointmentType" ADD CONSTRAINT "LocationAppointmentType_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationAppointmentType" ADD CONSTRAINT "LocationAppointmentType_appointmentTypeId_fkey" FOREIGN KEY ("appointmentTypeId") REFERENCES "AppointmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlotConfiguration" ADD CONSTRAINT "SlotConfiguration_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlotConfiguration" ADD CONSTRAINT "SlotConfiguration_appointmentTypeId_fkey" FOREIGN KEY ("appointmentTypeId") REFERENCES "AppointmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecialDate" ADD CONSTRAINT "SpecialDate_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecialDate" ADD CONSTRAINT "SpecialDate_appointmentTypeId_fkey" FOREIGN KEY ("appointmentTypeId") REFERENCES "AppointmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockedSlot" ADD CONSTRAINT "BlockedSlot_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockedSlot" ADD CONSTRAINT "BlockedSlot_appointmentTypeId_fkey" FOREIGN KEY ("appointmentTypeId") REFERENCES "AppointmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockedSlot" ADD CONSTRAINT "BlockedSlot_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_appointmentTypeId_fkey" FOREIGN KEY ("appointmentTypeId") REFERENCES "AppointmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waitlist" ADD CONSTRAINT "Waitlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waitlist" ADD CONSTRAINT "Waitlist_appointmentTypeId_fkey" FOREIGN KEY ("appointmentTypeId") REFERENCES "AppointmentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waitlist" ADD CONSTRAINT "Waitlist_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailNotification" ADD CONSTRAINT "EmailNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailNotification" ADD CONSTRAINT "EmailNotification_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailNotification" ADD CONSTRAINT "EmailNotification_waitlistId_fkey" FOREIGN KEY ("waitlistId") REFERENCES "Waitlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
