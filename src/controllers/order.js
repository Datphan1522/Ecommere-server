import { Request, Response } from "express";
import { HTTP_STATUS } from "../utils/constant";

//get all order
export const getAllOrder = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is get all orders");
};

//get order by id
export const getOrderById = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is get order by id");
};

//Add order
export const addOrder = async (req: Request, res: Response) => {
  res.status(HTTP_STATUS.SUCCESS).json("This is add order");
};
