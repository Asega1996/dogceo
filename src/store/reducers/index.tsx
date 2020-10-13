import { combineReducers } from "redux";
import { dogReducer } from "./dog";

export const rootReducer = combineReducers({
  dogs: dogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
