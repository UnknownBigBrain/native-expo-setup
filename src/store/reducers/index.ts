import { combineReducers } from "redux";

// reducers
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
