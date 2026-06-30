import { Request, Response } from "express";
import jwt from "jsonwebtoken";
console.log(process.env.JWT_SECRET);
export const register = (req: Request, res: Response) => {

    const token = jwt.sign(
        {
            id: 1,
            role: "STUDENT"
        },
        process.env.JWT_SECRET as string,
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

    const token = jwt.sign(
        {
            id: 1,
            role: "STUDENT"
        },
        process.env.JWT_SECRET as string,
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