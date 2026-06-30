import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const register = (req: Request, res: Response) => {
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      success: false,
      message: "JWT_SECRET is missing",
    });
  }

  const token = jwt.sign(
    {
      id: 1,
      role: "STUDENT",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    token,
  });
};

export const login = (req: Request, res: Response) => {
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      success: false,
      message: "JWT_SECRET is missing",
    });
  }

  const token = jwt.sign(
    {
      id: 1,
      role: "STUDENT",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
};