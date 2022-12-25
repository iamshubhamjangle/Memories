import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oAuth: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.oAuth = payload;
    },
    removeUser: (state) => {
      state.oAuth = null;
    },
  },
  extraReducers: (builder) => {
    /**
     * LOGIN USER
     */
    // builder.addCase(fetchPosts.pending, (state) => {
    //   console.log("fetch pending");
    //   state.loading = true;
    //   state.error = "";
    // });
    // builder.addCase(fetchPosts.fulfilled, (state, action) => {
    //   console.log("fetch successful", action);
    //   state.loading = false;
    //   state.posts = action.payload;
    //   state.error = "";
    // });
    // builder.addCase(fetchPosts.rejected, (state, action) => {
    //   console.log("fetch rejected", action);
    //   state.loading = false;
    //   state.posts = [];
    //   state.error = action.payload;
    // });
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
