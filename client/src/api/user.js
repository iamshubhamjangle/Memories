import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser } from "../features/user/userSlice";

const url = import.meta.env.VITE_BACKEND_ENDPOINT + "/users";

/**
 * SIGN IN
 */
export const signIn = createAsyncThunk(
  "user/signIn",
  async (formData, { dispatch }) => {
    const response = await axios.post(`${url}/signin`, formData);

    if (response.status == 200) {
      dispatch(setUser(response.data));
    }

    return response;
  }
);

/**
 * SIGN UP
 */
export const signUp = createAsyncThunk("user/signUp", async (formData) => {
  return await axios.post(`${url}/signup`, formData).then((res) => res.data);
});
