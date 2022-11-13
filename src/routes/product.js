import express from "express";

import {
  getAllProduct,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controllers/product";

const router = express.Router();

//get all product
router.get("/", getAllProduct);

//get product by id
router.get("/:productId", getProductById);

//Add product
router.post("/", addProduct);

//Edit product
router.put("/:productId", editProduct);

//Delete product
router.delete("/:productId", deleteProduct);

export default router;
