import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice.js";
import formReducer from "../features/form/formSlice.js";
import userReducer from "../features/user/userSlice.js";

const store = configureStore({
  reducer: {
    post: postReducer,
    form: formReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
