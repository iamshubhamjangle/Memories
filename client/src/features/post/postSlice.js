import { createSlice } from "@reduxjs/toolkit";
import { deletePost, fetchPosts, likePost } from "../../api/post.js";

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
      // console.log("fetch pending");
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // console.log("fetch successful", action);
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      // console.log("fetch rejected", action);
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });

    /**
     * DELETE POST
     */
    builder.addCase(deletePost.pending, (state) => {
      // console.log("delete pending");
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      // console.log("delete successful", action);
      state.loading = false;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      // console.log("delete rejected", action);
      state.loading = false;
    });
    /**
     * LIKE A POST
     */
    builder.addCase(likePost.pending, (state) => {
      // console.log("like pending");
      state.loading = true;
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      // console.log("like successful", action);
      state.loading = false;
    });
    builder.addCase(likePost.rejected, (state, action) => {
      // console.log("like rejected", action);
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
export const {} = postSlice.actions;
