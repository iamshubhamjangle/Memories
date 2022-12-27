import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { name, title, message, tags, selectedFile } = req.body;
  const newPost = new PostMessage({
    title,
    message,
    tags,
    selectedFile,
    name,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { name, title, message, tags, selectedFile } = req.body;
  const post = {
    name,
    title,
    message,
    tags,
    selectedFile,
    creator: req.userId,
  };

  // If incoming id is not a mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.status(201).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  // If incoming id is not a mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await PostMessage.findByIdAndDelete(id);

  res.status(201).json({ postId: id, message: "Post deleted successfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  // If incoming id is not a mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(409).send("No post with that id");
  }

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id != String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.status(201).json(updatedPost);
};
