import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (data, thunkAPI) => {
    const jwttoken = localStorage.getItem("jwtToken");
    const response = await axios.get("http://localhost:8000/posts", {
      headers: {
        Authorization: `Bearer ${jwttoken}`,
      },
    });
    console.log(response);
    return response.data;
  }
);

const initialState = {
  posts: [],
  username: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.posts = action.payload.data;
    });
  },
});
