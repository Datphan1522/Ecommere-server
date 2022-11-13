import express from "express";
import {
  getAllCoupon,
  getCouponById,
  addCoupon,
  editCoupon,
} from "../controllers/coupon";

const router = express.Router();

//get all coupon
router.get("/", getAllCoupon);

//get coupon by id
router.get("/:couponId", getCouponById);

//Add coupon
router.post("/", addCoupon);

//Edit coupon
router.put("/:couponId", editCoupon);

export default router;
