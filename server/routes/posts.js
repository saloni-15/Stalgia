import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);  //to fetch all posts
router.post("/", createPost); //to create new post
router.patch("/:id", updatePost); //to update existing document

export default router;