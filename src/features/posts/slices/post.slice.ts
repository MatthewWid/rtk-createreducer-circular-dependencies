import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from "@reduxjs/toolkit";
import { RootState } from "stores";
import { deleteUser } from "features/users";
import { Post } from "../types";

export const postAdapter = createEntityAdapter<Post>();

export const postSelectors = postAdapter.getSelectors<RootState>(
	(state) => state.posts
);

export const createPost = createAsyncThunk<Post, Post>(
	"posts/create",
	(arg) => {
		// Some async logic...
		return arg;
	}
);

const postsSlice = createSlice({
	name: "posts",
	initialState: postAdapter.getInitialState(),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createPost.fulfilled, (state, action) => {
				postAdapter.addOne(state, action.payload);
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				postAdapter.removeMany(state, action.payload.postIds);
			});
	},
});

export const postsReducer = postsSlice.reducer;
