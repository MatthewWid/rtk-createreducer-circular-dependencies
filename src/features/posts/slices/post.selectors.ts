import { RootState } from "stores";
import { postAdapter } from "./post.adapter";

export const postSelectors = postAdapter.getSelectors<RootState>(
	(state) => state.posts
);
