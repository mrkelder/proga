import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import linksReducer from "app/linksReducer";

const rootReducer = combineReducers({
  links: linksReducer
});

const isProduction = process.env.NODE_ENV === "production";

const middleWare = composeWithDevTools(applyMiddleware());

const store = isProduction
  ? createStore(rootReducer)
  : createStore(rootReducer, middleWare);

export default store;
