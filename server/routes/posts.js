import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);  //to fetch all posts
router.post("/", createPost); //to create new post
router.patch("/:id", updatePost); //to update existing document
router.delete("/:id", deletePost);//to delete post
router.patch("/:id/likePost", likePost); //as liking a post is updating the likeCount of the post, that's why patch is used.

export default router;