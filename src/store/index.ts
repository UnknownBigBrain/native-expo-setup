import { createStore } from "redux";
import rootReducer from "./reducers";

const makeStore = () => createStore(rootReducer);

export default makeStore;
