import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import { RootState } from "stores";
import { createPost } from "features/posts";
import { User } from "../types";

export const userAdapter = createEntityAdapter<User>();

export const userSelectors = userAdapter.getSelectors<RootState>(
	(state) => state.users
);

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

const usersSlice = createSlice({
	name: "users",
	initialState: userAdapter.getInitialState(),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createUser.fulfilled, (state, action) => {
				userAdapter.addOne(state, action.payload);
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				userAdapter.removeOne(state, action.payload.id);
			})
			.addCase(createPost.fulfilled, (state, action) => {
				const { authorId, id: postId } = action.payload;

				state.entities[authorId]?.postIds.push(postId);
			});
	},
});

export const usersReducer = usersSlice.reducer;
