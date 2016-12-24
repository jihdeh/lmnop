import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./reducers";

// Use the NODE_ENV to include logging and debugging tools
// in development environment. They will be compiled out of
// the production build.
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(createLogger());
  // Turns on Reactotron debugging tool
  require("../config/ReactotronConfig");
};

export default (initialState = {}) => {

  const enhancers = [
    applyMiddleware(...middleware)
  ].filter(f => !!f);

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );

  return store;
};