import { createReducer } from "@reduxjs/toolkit";
import { deleteUser } from "features/users";
import { createPost } from "./post.actions";
import { postAdapter } from "./post.adapter";

export const postsReducer = createReducer(
	postAdapter.getInitialState(),
	(builder) => {
		builder
			.addCase(createPost.fulfilled, (state, action) => {
				postAdapter.addOne(state, action.payload);
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				postAdapter.removeMany(state, action.payload.postIds);
			});
	}
);
