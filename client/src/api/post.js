import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_ENDPOINT + "/posts";

/**
 * FETCH POST
 */
export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  return await axios.get(url).then((res) => res.data);
});

/**
 * CREATE POST
 */
export const createPost = createAsyncThunk("post/createPost", async (post) => {
  const { title, message, creator, tags, selectedFile } = post;
  const data = { title, message, creator, tags, selectedFile };
  return await axios.post(url, data).then((res) => res.data);
});

/**
 * UPDATE POST
 */
export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (post, { dispatch }) => {
    const { _id, title, message, creator, tags, selectedFile } = post;
    const data = { _id, title, message, creator, tags, selectedFile };

    const result = await axios.patch(`${url}/${_id}`, data);
    if (result.status == 201) {
      dispatch(fetchPosts());
    }
    return result;
  }
);

/**
 * DELETE POST
 */
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (id, { dispatch }) => {
    const result = await axios.delete(`${url}/${id}`);
    if (result.status == 201) {
      dispatch(fetchPosts());
    }

    return result;
  }
);

/**
 * LIKE A POST
 */
export const likePost = createAsyncThunk(
  "post/likePost",
  async (id, { dispatch }) => {
    const result = await axios.patch(`${url}/like/${id}`);

    if (result.status == 201) {
      dispatch(fetchPosts());
    }

    return result;
  }
);
