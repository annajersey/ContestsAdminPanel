import {SET_ADMIN_LOGGED_IN, SET_ADMIN_LOGGED_OUT} from "../constants";

export default (state = { isAdminLoggedIn: false }, action) => {
    switch (action.type) {
        case SET_ADMIN_LOGGED_IN:
            return { ...state, isAdminLoggedIn: true };
        case SET_ADMIN_LOGGED_OUT:
            return { ...state, isAdminLoggedIn: false };
        default:
            return state;
    }
};

