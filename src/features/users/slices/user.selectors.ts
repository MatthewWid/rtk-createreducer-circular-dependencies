import { RootState } from "stores";
import { userAdapter } from "./user.adapter";

export const userSelectors = userAdapter.getSelectors<RootState>(
	(state) => state.users
);
