import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/posts/";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  return await axios.get(url).then((res) => res.data);
});

export const createPost = createAsyncThunk("post/createPost", (post) => {
  return axios.post(url, post).then((res) => res.data);
});

export const updatePost = createAsyncThunk("post/updatePost", (id, post) => {
  console.log(`${url}${id}`);
  return axios.patch(`${url}${id}`, post);
});
