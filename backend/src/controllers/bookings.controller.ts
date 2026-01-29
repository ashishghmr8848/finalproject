import {Response, NextFunction} from "express";
import {AuthRequest} from "../middleware/auth";
import bookingService from "../services/booking.service";

class BookingsController {
  async getAvailableSlots(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {locationId, appointmentTypeId, startDate, endDate} = req.query;

      const slots = await bookingService.getAvailableSlots(
        locationId as string,
        appointmentTypeId as string,
        startDate as string,
        endDate as string,
      );

      res.json({
        success: true,
        data: slots,
      });
    } catch (error) {
      next(error);
    }
  }

  async checkAvailability(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {locationId, appointmentTypeId, date, time} = req.body;

      const isAvailable = await bookingService.isSlotAvailable(
        locationId,
        appointmentTypeId,
        date,
        time,
      );

      res.json({
        success: true,
        data: {available: isAvailable},
      });
    } catch (error) {
      next(error);
    }
  }

  async createBooking(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const {
        appointmentTypeId,
        locationId,
        appointmentDate,
        appointmentTime,
        notes,
      } = req.body;

      const booking = await bookingService.bookAppointmentSlot(
        userId,
        appointmentTypeId,
        locationId,
        appointmentDate,
        appointmentTime,
        notes,
      );

      res.status(201).json({
        success: true,
        data: booking,
        message: "Booking created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserBookings(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const {status} = req.query;

      const bookings = await bookingService.getUserBookings(
        userId,
        status as string,
      );

      res.json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      next(error);
    }
  }

  async getBookingById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      const userId = req.user!.id;

      const booking = await bookingService.getBookingById(id as string, userId);

      res.json({
        success: true,
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  }

  async cancelBooking(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      const userId = req.user!.id;
      const {reason} = req.body;

      const booking = await bookingService.cancelBooking(
        id as string,
        userId,
        "USER",
        reason,
      );

      res.json({
        success: true,
        data: booking,
        message: "Booking cancelled successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new BookingsController();
