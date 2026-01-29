import {Router} from "express";
import waitlistController from "../controllers/waitlist.controller";
import {authenticate} from "../middleware/auth";
import {validate} from "../middleware/validation";
import {joinWaitlistSchema} from "../utils/validators";

const router = Router();

// All routes require authentication
router.use(authenticate);

router.post("/", validate(joinWaitlistSchema), waitlistController.joinWaitlist);
router.get("/", waitlistController.getUserWaitlist);
router.get("/:id/position", waitlistController.getWaitlistPosition);
router.put("/:id", waitlistController.updateWaitlistEntry);
router.delete("/:id", waitlistController.removeFromWaitlist);

export default router;
