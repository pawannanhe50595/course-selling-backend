import express from "express";
import {
  getCourses,
  createCourse,
  getCourseById,
} from "../controllers/course.controller";

import { verifyToken } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", getCourses);

// 👇 Sirf POST route ko protect kar diya
router.post("/", verifyToken, createCourse);

router.get("/:id", getCourseById);

export default router;