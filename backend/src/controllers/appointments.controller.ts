import {Response, NextFunction} from "express";
import {AuthRequest} from "../middleware/auth";
import prisma from "../config/database";

class AppointmentsController {
  async getAllAppointmentTypes(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const appointmentTypes = await prisma.appointmentType.findMany({
        where: {isActive: true},
      });

      res.json({
        success: true,
        data: appointmentTypes,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAppointmentTypeById(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {id} = req.params;

      const appointmentType = await prisma.appointmentType.findUnique({
        where: {id: id as string},
      });

      if (!appointmentType) {
        return res.status(404).json({
          success: false,
          error: {
            code: "NOT_FOUND",
            message: "Appointment type not found",
          },
        });
      }

      res.json({
        success: true,
        data: appointmentType,
      });
    } catch (error) {
      next(error);
    }
  }

  async createAppointmentType(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const appointmentType = await prisma.appointmentType.create({
        data: req.body,
      });

      res.status(201).json({
        success: true,
        data: appointmentType,
        message: "Appointment type created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async updateAppointmentType(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {id} = req.params;

      const appointmentType = await prisma.appointmentType.update({
        where: {id: id as string},
        data: req.body,
      });

      res.json({
        success: true,
        data: appointmentType,
        message: "Appointment type updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteAppointmentType(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {id} = req.params;

      await prisma.appointmentType.update({
        where: {id: id as string},
        data: {isActive: false},
      });

      res.json({
        success: true,
        message: "Appointment type deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AppointmentsController();
