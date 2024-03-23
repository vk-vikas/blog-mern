import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { postsSlice } from "./postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postsSlice.reducer,
  },
});
