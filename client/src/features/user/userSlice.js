import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oAuth: null,
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
  extraReducers: {},
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
