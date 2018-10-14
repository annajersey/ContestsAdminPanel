import {createStore} from "redux";
import reducer from "../reducers";

export const config = {
    store: createStore(reducer)
};