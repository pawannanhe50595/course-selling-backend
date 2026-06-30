import { Request, Response } from "express";

export const createEnrollment = (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Enrollment Created Successfully"
  });
};

export const getEnrollments = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "All Enrollments",
    data: [
      {
        id: 1,
        studentId: 1,
        courseId: 1,
        status: "Purchased"
      }
    ]
  });
};