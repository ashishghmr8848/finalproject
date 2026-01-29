import {Request, Response, NextFunction} from "express";
import * as slotService from "../services/slot.service";

export const getAvailableSlots = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const locationId = req.query.locationId as string;
    const appointmentTypeId = req.query.appointmentTypeId as string;
    const startDate = req.query.startDate as string;
    const endDate = req.query.endDate as string;

    if (!locationId || !appointmentTypeId || !startDate || !endDate) {
      res.status(400).json({
        success: false,
        message:
          "Missing required query parameters: locationId, appointmentTypeId, startDate, endDate",
      });
      return;
    }

    const slots = await slotService.getAvailableSlots({
      locationId,
      appointmentTypeId,
      startDate,
      endDate,
    });

    res.status(200).json({
      success: true,
      data: slots,
    });
  } catch (error) {
    next(error);
  }
};

export const checkAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Implementation for checking specific single slot if needed
    res.status(501).json({message: "Not implemented"});
  } catch (error) {
    next(error);
  }
};

// Admin Configurations
// export const createConfiguration = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const config = await slotService.createSlotConfiguration(req.body);
//     res.status(201).json({success: true, data: config});
//   } catch (error) {
//     next(error);
//   }
// };

// export const getConfigurations = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const configs = await slotService.getSlotConfigurations();
//     res.status(200).json({success: true, data: configs});
//   } catch (error) {
//     next(error);
//   }
// };

// export const getConfiguration = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const {locationId, appointmentTypeId} = req.params;
//     const config = await slotService.getSlotConfiguration(
//       locationId,
//       appointmentTypeId,
//     );
//     if (!config) {
//       res
//         .status(404)
//         .json({success: false, message: "Configuration not found"});
//       return;
//     }
//     res.status(200).json({success: true, data: config});
//   } catch (error) {
//     next(error);
//   }
// };
