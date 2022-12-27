import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser } from "../features/user/userSlice";

const url = import.meta.env.VITE_BACKEND_ENDPOINT + "/users";

/**
 * SIGN IN
 */
export const signIn = createAsyncThunk(
  "user/signIn",
  async (formData, { dispatch, rejectWithValue }) => {
    return await axios
      .post(`${url}/signin`, formData)
      .then((res) => {
        if (res.status == 200) {
          dispatch(setUser(res.data));
        }
        return res.data;
      })
      .catch((res) => {
        // console.log(res);
        rejectWithValue(res);
      });
  }
);

/**
 * SIGN UP
 */
export const signUp = createAsyncThunk(
  "user/signUp",
  async (formData, { dispatch, rejectWithValue }) => {
    return await axios
      .post(`${url}/signup`, formData)
      .then((res) => {
        if (res.status == 200) {
          dispatch(setUser(res.data));
        }
        return res.data;
      })
      .catch((res) => {
        // console.log(res);
        rejectWithValue(res);
      });
  }
);
