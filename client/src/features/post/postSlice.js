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
  },
});

export default postSlice.reducer;
export const {} = postSlice.actions;
