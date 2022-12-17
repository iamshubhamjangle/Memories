import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice.js";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
