import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { NewsReducer } from "./NewsReducer";

const rootReducer = combineReducers({
  news: NewsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
