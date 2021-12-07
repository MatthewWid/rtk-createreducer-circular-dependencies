import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "features/users";
import { postsReducer } from "features/posts";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
