import express from "express";
import {
  createEnrollment,
  getEnrollments
} from "../controllers/enrollment.controller";

const router = express.Router();

router.post("/", createEnrollment);
router.get("/", getEnrollments);

export default router;