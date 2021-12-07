import { nanoid } from "@reduxjs/toolkit";
import { createPost } from "features/posts";
import { createUser, deleteUser } from "features/users";
import { store } from "./stores";

const logState = () => console.dir(store.getState(), { depth: null });

(async () => {
	logState();

	const userId = nanoid();

	await store.dispatch(
		createUser({
			id: userId,
			name: "Matt",
			postIds: [],
		})
	);

	logState();

	const postId = nanoid();

	await store.dispatch(
		createPost({
			id: postId,
			title: "My First Post",
			authorId: userId,
		})
	);

	logState();

	await store.dispatch(deleteUser({ userId }));

	logState();
})();
