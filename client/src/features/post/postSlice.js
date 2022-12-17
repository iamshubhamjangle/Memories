import { createSlice } from "@reduxjs/toolkit";
import { createPost, fetchPosts, updatePost } from "../../api/api.js";

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
    // FETCH POST
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
    // CREATE POST
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, { type, payload }) => {
      console.log("post created", type, payload);
      state.posts = { ...state.posts, payload };
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
    });
    // UPDATE POST
    builder.addCase(updatePost.pending, (state) => {});
    builder.addCase(updatePost.fulfilled, (state, { type, payload }) => {
      console.log("post updated", type, payload);
    });
    builder.addCase(updatePost.rejected, (state, { type, payload }) => {
      console.log("post updated rejected", type, payload);
    });
  },
});

export default postSlice.reducer;
export const {} = postSlice.actions;
