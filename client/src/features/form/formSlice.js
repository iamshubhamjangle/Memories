import { createSlice } from "@reduxjs/toolkit";
import { createPost, updatePost } from "../../api/post";

const initialState = {
  loading: false,
  updateMode: false,
  data: {
    _id: "",
    title: "",
    message: "",
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
  extraReducers: (builder) => {
    /**
     * CREATE POST
     */
    builder.addCase(createPost.pending, (state) => {
      // console.log("add pending");
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, { type, payload }) => {
      // console.log("add successful", type, payload);
      state.data._id = "";
      state.data.title = "";
      state.data.message = "";
      state.data.creator = "";
      state.data.tags = [];
      state.data.selectedFile = "";
      state.data.likeCount = 0;
      state.data.createdAt = "";
      state.updateMode = false;
      state.loading = false;
    });
    builder.addCase(createPost.rejected, (state, action) => {
      // console.log("add rejected", action);
      state.loading = false;
    });

    /**
     * UPDATE POST
     */
    builder.addCase(updatePost.pending, (state) => {
      // console.log("update pending");
      state.loading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      // console.log("update successful", action);
      state.data._id = "";
      state.data.title = "";
      state.data.message = "";
      state.data.creator = "";
      state.data.tags = [];
      state.data.selectedFile = "";
      state.data.likeCount = 0;
      state.data.createdAt = "";
      state.updateMode = false;
      state.loading = false;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      // console.log("update rejected", action);
      state.loading = false;
    });

    /**
     * Dependent Reducer
     */
    // ["post/createPost/fulfilled"]: (state) => {
    //   state.data._id = "";
    //   state.data.title = "";
    //   state.data.message = "";
    //   state.data.creator = "";
    //   state.data.tags = [];
    //   state.data.selectedFile = "";
    //   state.data.likeCount = 0;
    //   state.data.createdAt = "";
    //   state.updateMode = false;
    // },
    // ["post/updatePost/fulfilled"]: (state) => {
    //   state.data._id = "";
    //   state.data.title = "";
    //   state.data.message = "";
    //   state.data.creator = "";
    //   state.data.tags = [];
    //   state.data.selectedFile = "";
    //   state.data.likeCount = 0;
    //   state.data.createdAt = "";
    //   state.updateMode = false;
    // },
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
