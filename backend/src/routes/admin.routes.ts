import {Router} from "express";
import adminController from "../controllers/admin.controller";
import {authenticate} from "../middleware/auth";
import {requireAdmin} from "../middleware/roleCheck";
import {validate} from "../middleware/validation";
import {
  createSlotConfigurationSchema,
  updateSlotConfigurationSchema,
  createSpecialDateSchema,
  createBlockedSlotSchema,
} from "../utils/validators";

const router = Router();

// All routes require authentication and admin role
router.use(authenticate, requireAdmin);

// Bookings management
router.get("/bookings", adminController.getAllBookings);
router.get("/statistics", adminController.getStatistics);
router.put("/bookings/:id/status", adminController.updateBookingStatus);
router.put("/bookings/:id/cancel", adminController.cancelBooking);

// User management
router.get("/users", adminController.getAllUsers);
router.put("/users/:id/role", adminController.updateUserRole);

// Special dates
router.post(
  "/special-dates",
  validate(createSpecialDateSchema),
  adminController.createSpecialDate,
);
router.get("/special-dates", adminController.getAllSpecialDates);
router.delete("/special-dates/:id", adminController.deleteSpecialDate);

// Blocked slots
router.post(
  "/blocked-slots",
  validate(createBlockedSlotSchema),
  adminController.createBlockedSlot,
);
router.get("/blocked-slots", adminController.getAllBlockedSlots);
router.delete("/blocked-slots/:id", adminController.deleteBlockedSlot);

// Waitlist management
router.get("/waitlist", adminController.getAllWaitlistEntries);

// Slot configurations
router.post(
  "/slot-configurations",
  validate(createSlotConfigurationSchema),
  adminController.createSlotConfiguration,
);
router.get("/slot-configurations", adminController.getAllSlotConfigurations);
router.get(
  "/slot-configurations/:locationId/:appointmentTypeId",
  adminController.getSlotConfiguration,
);
router.put(
  "/slot-configurations/:id",
  validate(updateSlotConfigurationSchema),
  adminController.updateSlotConfiguration,
);
router.delete(
  "/slot-configurations/:id",
  adminController.deleteSlotConfiguration,
);

export default router;
