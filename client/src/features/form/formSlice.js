import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateMode: false,
  data: {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
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
      state.data.creator = "";
      state.data.title = "";
      state.data.message = "";
      state.data.tags = "";
      state.data.selectedFile = "";
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
      state.data.creator = "";
      state.data.title = "";
      state.data.message = "";
      state.data.tags = "";
      state.data.selectedFile = "";
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
  setFile,
  clearFormData,
  setUpdateMode,
  setFormData,
} = formSlice.actions;
