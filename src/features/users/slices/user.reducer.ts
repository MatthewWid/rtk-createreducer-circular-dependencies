import { createReducer } from "@reduxjs/toolkit";
import { createPost } from "features/posts";
import { createUser, deleteUser } from "./user.actions";
import { userAdapter } from "./user.adapter";

export const usersReducer = createReducer(
	userAdapter.getInitialState(),
	(builder) => {
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
	}
);
