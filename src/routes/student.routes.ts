import express from "express";
import {
  createStudent,
  getStudentById
} from "../controllers/student.controller";

const router = express.Router();

router.post("/", createStudent);
router.get("/:id", getStudentById);

export default router;