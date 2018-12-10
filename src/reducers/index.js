import {SET_ADMIN_LOGGED_IN, SET_ADMIN_LOGGED_OUT} from "../constants";

export default (state = {isAdminLogin: localStorage.getItem("token") ? true : false}, action) => {
    switch (action.type) {
    case SET_ADMIN_LOGGED_IN:
        return {...state, isAdminLogin: true};
    case SET_ADMIN_LOGGED_OUT:
        return {...state, isAdminLogin: false};
    default:
        return state;
    }
};

