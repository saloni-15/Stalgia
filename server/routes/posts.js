import express from "express";
import {
  getPostsBySearch,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getPostsBySearch)
router.get("/", getPosts); //to fetch all posts
router.post("/", auth, createPost); //to create new post
router.patch("/:id", auth, updatePost); //to update existing document
router.delete("/:id", auth, deletePost); //to delete post
router.patch("/:id/likePost", auth, likePost); //as liking a post is updating the likeCount of the post, that's why patch is used.

export default router;
