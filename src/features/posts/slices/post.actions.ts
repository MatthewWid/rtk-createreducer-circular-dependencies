import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types";

export const createPost = createAsyncThunk<Post, Post>(
  "posts/create",
  (arg) => {
    // Some async logic...
    return arg;
  }
);
