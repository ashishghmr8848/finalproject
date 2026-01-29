import {Router} from "express";
import * as slotController from "../controllers/slot.controller";
import {authenticate} from "../middleware/auth";
import {requireRole} from "../middleware/roleCheck";

const router = Router();

// Public/User routes
router.get("/available", slotController.getAvailableSlots);
router.post("/check-availability", slotController.checkAvailability);

// Admin routes
// router.get(
//   "/configurations",
//   authenticate,
//   requireRole("ADMIN"),
//   slotController.getConfigurations,
// );
// router.get(
//   "/configurations/:locationId/:appointmentTypeId",
//   authenticate,
//   requireRole("ADMIN"),
//   slotController.getConfiguration,
// );
// router.post(
//   "/configurations",
//   authenticate,
//   requireRole("ADMIN"),
//   slotController.createConfiguration,
// );

export default router;
