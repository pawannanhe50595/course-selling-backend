import { Request, Response } from "express";

export const createStudent = (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Student Created Successfully"
  });
};

export const getStudentById = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    message: `Student Details of ID ${id}`
  });
};