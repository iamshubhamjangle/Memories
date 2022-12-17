import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCreator: (state, { payload }) => {
      state.creator = payload;
    },
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
    setTags: (state, { payload }) => {
      state.tags = payload;
    },
    setSelectedFile: (state, { payload }) => {
      state.selectedFile = payload;
    },
    clearFormData: (state) => {
      state.creator = "";
      state.title = "";
      state.message = "";
      state.tags = "";
      state.selectedFile = "";
    },
  },
  extraReducers: {},
});

export default formSlice.reducer;
export const {
  setCreator,
  setTitle,
  setMessage,
  setTags,
  setFile,
  clearFormData,
} = formSlice.actions;
