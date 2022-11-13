import { Request, Response } from "express";
import { HTTP_STATUS } from "../utils/constant";

//get all category
export const getAllCategory = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is get all category");
};

//Add category
export const addCategory = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is add category");
};

//edit category
export const editCategory = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is edit category");
};

//delete category
export const deleteCategory = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is delete category");
};
