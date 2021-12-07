import { createEntityAdapter } from "@reduxjs/toolkit";
import { User } from "../types";

export const userAdapter = createEntityAdapter<User>();
