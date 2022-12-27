import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../api/user";

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.isLoggedIn = true;
    },
    removeUser: (state) => {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
    },
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
  extraReducers: (builder) => {
    /**
     * LOGIN USER
     */
    builder.addCase(signIn.pending, (state) => {
      console.log("signIn pending");
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log("signIn successful", action);
      state.loading = false;
      state.error = "";
      state.isLoggedIn = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      console.log("signIn rejected", action);
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    });
    /**
     * SIGNUP USER
     */
    builder.addCase(signUp.pending, (state) => {
      console.log("signUp pending");
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log("signUp successful", action);
      state.loading = false;
      state.error = "";
      state.isLoggedIn = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log("signUp rejected", action);
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    });
  },
});

export default userSlice.reducer;
export const { setUser, removeUser, setIsLoggedIn } = userSlice.actions;
