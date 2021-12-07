import { createEntityAdapter } from "@reduxjs/toolkit";
import { Post } from "../types";

export const postAdapter = createEntityAdapter<Post>();
