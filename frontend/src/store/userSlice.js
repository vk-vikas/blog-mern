import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  const response = await axios.post("http://localhost:8000/users/login", data);
  console.log(response);
  localStorage.setItem("jwtToken", response.data.data);
  return {
    response,
    data,
  };
});

export const register = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    const response = await axios.post(
      "http://localhost:8000/users/signup",
      data
    );
  }
);

const initialState = {
  isLoggedIn: false,
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.setItem("jwtToken", "");
      state.isLoggedIn = false;
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.data.email;
    });
  },
});

export const { logout } = userSlice.actions;
