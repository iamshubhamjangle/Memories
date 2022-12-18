import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  deletePost,
  fetchPosts,
  likePost,
  updatePost,
} from "../../api/api.js";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * FETCH POST
     */
    builder.addCase(fetchPosts.pending, (state) => {
      console.log("fetch pending");
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("fetch successful", action);
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log("fetch rejected", action);
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
    /**
     * CREATE POST
     */
    builder.addCase(createPost.pending, (state) => {
      console.log("add pending");
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, { type, payload }) => {
      console.log("add successful", type, payload);
      state.loading = false;
      state.posts.push(payload);
    });
    builder.addCase(createPost.rejected, (state, action) => {
      console.log("add rejected", action);
      state.loading = false;
    });
    /**
     * UPDATE POST
     */
    builder.addCase(updatePost.pending, (state) => {
      console.log("update pending");
      state.loading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      console.log("update successful", action);
      state.loading = false;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      console.log("update rejected", action);
      state.loading = false;
    });
    /**
     * DELETE POST
     */
    builder.addCase(deletePost.pending, (state) => {
      console.log("delete pending");
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      console.log("delete successful", action);
      state.loading = false;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      console.log("delete rejected", action);
      state.loading = false;
    });
    /**
     * LIKE A POST
     */
    builder.addCase(likePost.pending, (state) => {
      console.log("like pending");
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      console.log("like successful", action);
    });
    builder.addCase(likePost.rejected, (state, action) => {
      console.log("like rejected", action);
    });
  },
});

export default postSlice.reducer;
export const {} = postSlice.actions;
