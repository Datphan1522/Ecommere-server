import { Request, Response } from "express";
import { HTTP_STATUS } from "./../utils/constant";

//signup
export const signup = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is signup");
};

//Login
export const login = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is login");
};

//forgot password
export const forgotPassword = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is forgot password");
};
