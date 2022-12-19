import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateMode: false,
  data: {
    _id: "",
    title: "",
    message: "",
    creator: "",
    tags: [],
    selectedFile: "",
    likeCount: 0,
    createdAt: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCreator: (state, { payload }) => {
      state.data.creator = payload;
    },
    setTitle: (state, { payload }) => {
      state.data.title = payload;
    },
    setMessage: (state, { payload }) => {
      state.data.message = payload;
    },
    setTags: (state, { payload }) => {
      state.data.tags = payload;
    },
    setSelectedFile: (state, { payload }) => {
      state.data.selectedFile = payload;
    },
    clearFormData: (state) => {
      state.data._id = "";
      state.data.title = "";
      state.data.message = "";
      state.data.creator = "";
      state.data.tags = [];
      state.data.selectedFile = "";
      state.data.likeCount = 0;
      state.data.createdAt = "";
      state.updateMode = false;
    },
    setUpdateMode: (state, { payload }) => {
      state.updateMode = payload;
    },
    setFormData: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: {
    // Dependent Reducer
    ["post/createPost/fulfilled"]: (state) => {
      state.data._id = "";
      state.data.title = "";
      state.data.message = "";
      state.data.creator = "";
      state.data.tags = [];
      state.data.selectedFile = "";
      state.data.likeCount = 0;
      state.data.createdAt = "";
      state.updateMode = false;
    },
    ["post/updatePost/fulfilled"]: (state) => {
      state.data._id = "";
      state.data.title = "";
      state.data.message = "";
      state.data.creator = "";
      state.data.tags = [];
      state.data.selectedFile = "";
      state.data.likeCount = 0;
      state.data.createdAt = "";
      state.updateMode = false;
    },
  },
});

export default formSlice.reducer;
export const {
  setCreator,
  setTitle,
  setMessage,
  setTags,
  setSelectedFile,
  clearFormData,
  setUpdateMode,
  setFormData,
} = formSlice.actions;
