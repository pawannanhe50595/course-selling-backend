import { Request, Response } from "express";

export const getCourses = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "All Courses",
    data: [
      {
        id: 1,
        title: "Node.js Course",
        price: 999,
      },
      {
        id: 2,
        title: "React Course",
        price: 1499,
      },
    ],
  });
};

export const createCourse = (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Course Created Successfully",
  });
};

export const getCourseById = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    message: `Course Details of ID ${id}`,
  });
};