import { combineReducers, compose, createStore } from "redux";
import AuthReducer from "./reducers/authReducer";
// import coinDBReducer from "../redux/reducers/coinDBReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combineReducer = combineReducers({
  AuthReducer,
  // coinDBReducer,
});
const store = createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
