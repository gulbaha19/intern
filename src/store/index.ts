import { combineReducers } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  user: usersReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type IState = ReturnType<typeof rootReducer>;

export type Dispatch = typeof store.dispatch;
