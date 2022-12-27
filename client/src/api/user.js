import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser } from "../features/user/userSlice";
import { toast } from "react-hot-toast";

const url = import.meta.env.VITE_BACKEND_ENDPOINT + "/users";

const handleError = (status, message) => {
  toast.error("Error! " + message);
};

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
        handleError(res.response.status, res.response.data.message);
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
        handleError(res.response.status, res.response.data.message);
        rejectWithValue(res);
      });
  }
);
