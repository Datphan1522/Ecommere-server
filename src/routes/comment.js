import express from "express";
import {
  getAllComment,
  getCommentById,
  addComment,
  editComment,
  deleteComment,
} from "../controllers/comment";

const router = express.Router();

//get all comment
router.get("/", getAllComment);

//get comment by id
router.get("/:commentId", getCommentById);

//Add comment
router.post("/", addComment);

//Edit comment
router.put("/:commentId", editComment);

//delete comment
router.delete("/:commentId", deleteComment);

export default router;
