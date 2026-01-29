import {Response, NextFunction} from "express";
import {AuthRequest} from "../middleware/auth";
import prisma from "../config/database";

class LocationsController {
  async getAllLocations(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const locations = await prisma.location.findMany({
        where: {isActive: true},
        include: {
          locationAppointmentTypes: {
            where: {isActive: true},
            include: {
              appointmentType: true,
            },
          },
        },
      });

      res.json({
        success: true,
        data: locations,
      });
    } catch (error) {
      next(error);
    }
  }

  async getLocationById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;

      const location = await prisma.location.findUnique({
        where: {id: id as string},
        include: {
          locationAppointmentTypes: {
            where: {isActive: true},
            include: {
              appointmentType: true,
            },
          },
        },
      });

      if (!location) {
        return res.status(404).json({
          success: false,
          error: {
            code: "NOT_FOUND",
            message: "Location not found",
          },
        });
      }

      res.json({
        success: true,
        data: location,
      });
    } catch (error) {
      next(error);
    }
  }

  async getLocationAppointmentTypes(
    req: AuthRequest,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {id} = req.params;

      const appointmentTypes = await prisma.locationAppointmentType.findMany({
        where: {
          locationId: id as string,
          isActive: true,
        },
        include: {
          appointmentType: true,
        },
      });

      res.json({
        success: true,
        data: appointmentTypes.map((lat: any) => lat.appointmentType),
      });
    } catch (error) {
      next(error);
    }
  }

  async createLocation(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const location = await prisma.location.create({
        data: req.body,
      });

      res.status(201).json({
        success: true,
        data: location,
        message: "Location created successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async updateLocation(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;

      const location = await prisma.location.update({
        where: {id: id as string},
        data: req.body,
      });

      res.json({
        success: true,
        data: location,
        message: "Location updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteLocation(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const {id} = req.params;

      await prisma.location.update({
        where: {id: id as string},
        data: {isActive: false},
      });

      res.json({
        success: true,
        message: "Location deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new LocationsController();
