import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import linksReducer from "app/linksReducer";
import formReducer from "app/formReducer";

const rootReducer = combineReducers({
  links: linksReducer,
  form: formReducer
});

const isProduction = process.env.NODE_ENV === "production";

const middleWare = composeWithDevTools(applyMiddleware());

const store = isProduction
  ? createStore(rootReducer)
  : createStore(rootReducer, middleWare);

export default store;
