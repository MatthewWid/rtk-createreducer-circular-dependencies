import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "stores";
import { User } from "../types";
import { userSelectors } from "./user.selectors";

export const createUser = createAsyncThunk("users/create", (arg: User) => {
	// Some async logic...
	return arg;
});

export const deleteUser = createAsyncThunk<
	User,
	{ userId: string },
	{ state: RootState }
>("users/delete", ({ userId }, { getState }) => {
	// Some async logic...
	return userSelectors.selectById(getState(), userId) as User;
});
