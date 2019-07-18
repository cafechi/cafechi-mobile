import { createStore, combineReducers, applyMiddleware } from "redux";
import playerReducer from "./reducers/playerReducer";
import thunk from "redux-thunk";

function configureStore() {
  const rootReducer = combineReducers({
    player: playerReducer
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}

export default configureStore;
