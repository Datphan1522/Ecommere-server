import express from "express";
import { getAllOrder, getOrderById, addOrder } from "../controllers/order";

const router = express.Router();

//get all category
router.get("/", getAllOrder);

//get order by id
router.get("/:orderId", getOrderById);

//Add category
router.post("/", addOrder);

export default router;
