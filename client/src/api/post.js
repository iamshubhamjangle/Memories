import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { removeUser } from "../features/user/userSlice";

const API = axios.create({ baseURL: import.meta.env.VITE_BACKEND_ENDPOINT });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    const { token } = JSON.parse(localStorage.getItem("user"));
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

const handleErrors = (errorCode, dispatch) => {
  if (errorCode === 405) {
    dispatch(removeUser());
  }
};

/**
 * FETCH POST
 */
export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  return await API.get("/posts").then((res) => res.data);
});

/**
 * CREATE POST
 */
export const createPost = createAsyncThunk(
  "post/createPost",
  async (post, { dispatch, rejectWithValue }) => {
    console.log("createPost", post);
    return await API.post("/posts", post)
      .then((res) => res.data)
      .catch((res) => {
        handleErrors(res.response.status, dispatch);
        return rejectWithValue({
          status: res.response.status,
          data: res.response.data,
        });
      });
  }
);

/**
 * UPDATE POST
 */
export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (
    { _id, title, message, creator, tags, selectedFile },
    { dispatch, rejectWithValue }
  ) => {
    const data = { _id, title, message, creator, tags, selectedFile };

    const result = await API.patch(`posts/${_id}`, data).catch((res) => {
      handleErrors(res.response.status, dispatch);
      return rejectWithValue({
        status: res.response.status,
        data: res.response.data,
      });
    });

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
  async (id, { dispatch, rejectWithValue }) => {
    const result = await API.delete(`posts/${id}`).catch((res) => {
      handleErrors(res.response.status, dispatch);
      return rejectWithValue({
        status: res.response.status,
        data: res.response.data,
      });
    });

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
  async (id, { dispatch, rejectWithValue }) => {
    const result = await API.patch(`posts/like/${id}`).catch((res) => {
      handleErrors(res.response.status, dispatch);
      return rejectWithValue({
        status: res.response.status,
        data: res.response.data,
      });
    });

    if (result.status == 201) {
      dispatch(fetchPosts());
    }

    return result;
  }
);