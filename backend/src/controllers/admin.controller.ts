import {Response, NextFunction} from "express";
import {AuthRequest} from "../middleware/auth";
import prisma from "../config/database";
import bookingService from "../services/booking.service";
import waitlistService from "../services/waitlist.service";

class AdminController {
  // Get all bookings with filters
  async getAllBookings(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {
        page = "1",
        limit = "20",
        status,
        locationId,
        startDate,
        endDate,
      } = req.query;

      const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

      const where: any = {};
      if (status) where.status = status;
      if (locationId) where.locationId = locationId;
      if (startDate && endDate) {
        where.appointmentDate = {
          gte: new Date(startDate as string),
          lte: new Date(endDate as string),
        };
      }

      const [bookings, total] = await Promise.all([
        prisma.booking.findMany({
          where,
          skip,
          take: parseInt(limit as string),
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
            appointmentDate: "desc",
          },
        }),
        prisma.booking.count({where}),
      ]);

      res.json({
        success: true,
        data: bookings,
        pagination: {
          page: parseInt(page as string),
          limit: parseInt(limit as string),
          total,
          totalPages: Math.ceil(total / parseInt(limit as string)),
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Get booking statistics
  async getStatistics(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const [
        totalBookings,
        confirmedBookings,
        cancelledBookings,
        completedBookings,
        activeWaitlist,
        totalUsers,
      ] = await Promise.all([
        prisma.booking.count(),
        prisma.booking.count({where: {status: "CONFIRMED"}}),
        prisma.booking.count({where: {status: "CANCELLED"}}),
        prisma.booking.count({where: {status: "COMPLETED"}}),
        prisma.waitlist.count({where: {status: "WAITING"}}),
        prisma.user.count({where: {role: "USER"}}),
      ]);

      res.json({
        success: true,
        data: {
          totalBookings,
          confirmedBookings,
          cancelledBookings,
          completedBookings,
          activeWaitlist,
          totalUsers,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update booking status
  async updateBookingStatus(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {id} = req.params;
      const {status} = req.body;

      const booking = await prisma.booking.update({
        where: {id: id as string},
        data: {status},
        include: {
          user: true,
          appointmentType: true,
          location: true,
        },
      });

      res.json({
        success: true,
        data: booking,
        message: "Booking status updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // Cancel booking (admin)
  async cancelBooking(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      const {reason} = req.body;
      const userId = req.user!.id;

      const booking = await bookingService.cancelBooking(
        id as string,
        userId,
        "ADMIN",
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

  // Get all users
  async getAllUsers(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {page = "1", limit = "20"} = req.query;
      const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

      const [users, total] = await Promise.all([
        prisma.user.findMany({
          skip,
          take: parseInt(limit as string),
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phoneNumber: true,
            role: true,
            isActive: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
        prisma.user.count(),
      ]);

      res.json({
        success: true,
        data: users,
        pagination: {
          page: parseInt(page as string),
          limit: parseInt(limit as string),
          total,
          totalPages: Math.ceil(total / parseInt(limit as string)),
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update user role
  async updateUserRole(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;
      const {role} = req.body;

      const user = await prisma.user.update({
        where: {id: id as string},
        data: {role},
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
        },
      });

      res.json({
        success: true,
        data: user,
        message: "User role updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // Create special date
  async createSpecialDate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const specialDate = await prisma.specialDate.create({
        data: {
          ...req.body,
          date: new Date(req.body.date),
        },
      });

      res.status(201).json({
        success: true,
        data: specialDate,
        message: "Special date created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all special dates
  async getAllSpecialDates(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const specialDates = await prisma.specialDate.findMany({
        include: {
          location: true,
          appointmentType: true,
        },
        orderBy: {
          date: "asc",
        },
      });

      res.json({
        success: true,
        data: specialDates,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete special date
  async deleteSpecialDate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;

      await prisma.specialDate.delete({
        where: {id: id as string},
      });

      res.json({
        success: true,
        message: "Special date deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // Create blocked slot
  async createBlockedSlot(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      const blockedSlot = await prisma.blockedSlot.create({
        data: {
          ...req.body,
          blockedDate: new Date(req.body.blockedDate),
          createdBy: userId,
        },
      });

      res.status(201).json({
        success: true,
        data: blockedSlot,
        message: "Slot blocked successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all blocked slots
  async getAllBlockedSlots(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const blockedSlots = await prisma.blockedSlot.findMany({
        include: {
          location: true,
          appointmentType: true,
        },
        orderBy: {
          blockedDate: "asc",
        },
      });

      res.json({
        success: true,
        data: blockedSlots,
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete blocked slot
  async deleteBlockedSlot(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;

      await prisma.blockedSlot.delete({
        where: {id: id as string},
      });

      res.json({
        success: true,
        message: "Blocked slot deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all waitlist entries
  async getAllWaitlistEntries(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {locationId, appointmentTypeId, status} = req.query;

      const entries = await waitlistService.getAllWaitlistEntries({
        locationId: locationId as string,
        appointmentTypeId: appointmentTypeId as string,
        status: status as string,
      });

      res.json({
        success: true,
        data: entries,
      });
    } catch (error) {
      next(error);
    }
  }

  // Slot configurations
  async createSlotConfiguration(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const config = await prisma.slotConfiguration.create({
        data: req.body,
      });

      res.status(201).json({
        success: true,
        data: config,
        message: "Slot configuration created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllSlotConfigurations(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const configs = await prisma.slotConfiguration.findMany({
        include: {
          location: true,
          appointmentType: true,
        },
      });

      res.json({
        success: true,
        data: configs,
      });
    } catch (error) {
      next(error);
    }
  }

  async getSlotConfiguration(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {locationId, appointmentTypeId} = req.params;

      const config = await prisma.slotConfiguration.findUnique({
        where: {
          locationId_appointmentTypeId: {
            locationId: locationId as string,
            appointmentTypeId: appointmentTypeId as string,
          },
        },
        include: {
          location: true,
          appointmentType: true,
        },
      });

      if (!config) {
        return res.status(404).json({
          success: false,
          error: {
            code: "NOT_FOUND",
            message: "Slot configuration not found",
          },
        });
      }

      res.json({
        success: true,
        data: config,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateSlotConfiguration(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {id} = req.params;

      const config = await prisma.slotConfiguration.update({
        where: {id: id as string},
        data: req.body,
      });

      res.json({
        success: true,
        data: config,
        message: "Slot configuration updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteSlotConfiguration(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {id} = req.params;

      await prisma.slotConfiguration.delete({
        where: {id: id as string},
      });

      res.json({
        success: true,
        message: "Slot configuration deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AdminController();
