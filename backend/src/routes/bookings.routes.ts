import {Router} from "express";
import bookingsController from "../controllers/bookings.controller";
import {authenticate} from "../middleware/auth";
import {validate} from "../middleware/validation";
import {createBookingSchema, cancelBookingSchema} from "../utils/validators";

const router = Router();

// All routes require authentication
router.use(authenticate);

router.get("/available", bookingsController.getAvailableSlots);
router.post("/check-availability", bookingsController.checkAvailability);
router.post(
  "/",
  validate(createBookingSchema),
  bookingsController.createBooking,
);
router.get("/", bookingsController.getUserBookings);
router.get("/:id", bookingsController.getBookingById);
router.put(
  "/:id/cancel",
  validate(cancelBookingSchema),
  bookingsController.cancelBooking,
);

export default router;
