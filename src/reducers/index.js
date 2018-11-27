import {SET_ADMIN_LOGGED_IN, SET_ADMIN_LOGGED_OUT} from "../constants";

export default (state = {isAdminLogin: localStorage.getItem("token") ? true : false}, action) => {
    switch (action.type) {
    case SET_ADMIN_LOGGED_IN:
        const {token} = action;
        localStorage.setItem("token", token);
        return {...state, isAdminLogin: true};
    case SET_ADMIN_LOGGED_OUT:
        localStorage.removeItem("token");
        return {...state, isAdminLogin: false};
    default:
        return state;
    }
};

