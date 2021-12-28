import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//GET POSTS
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//CREATE POST
export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage({...post, creator:req.userId, createdAt: new Date().toISOString()});

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

//EDIT POST
export const updatePost = async (req, res) => {
  const { id: _id } = req.params; //route->"/:id"

  const post = req.body; //update post content

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No posts with this id!"); //if _id is not valid

  //otherwise
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  ); //(id of the post to update, new post content, to receive new post)

  res.json(updatedPost);
};

//DELETE POST
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with tihs id!");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

//LIKE POST
export const likePost = async (req, res) => {
  const { id } = req.params;

  //if user is unauthenticated
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with tihs id!");

  const post = await PostMessage.findById(id);

  //to check if user has already liked the post or not
  const index = post.likes.findIndex((id) => id === String(req.userId)); //means user has already liked the post

  //if he hasn't, then...
  if (index === -1) {
    //like the post
    post.likes.push(req.userId);
  } else {
    //dislike the post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    post,
    { new: true }
  );

  res.status(200).json(updatedPost);
  
};
