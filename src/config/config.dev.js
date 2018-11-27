import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer);
export const config = {
    store
};
