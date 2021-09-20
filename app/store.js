import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import linksReducer from "app/linksReducer";

const rootReducer = combineReducers({
  links: linksReducer
});

const middleWare = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, middleWare);

export default store;
