import {
    SET_ADMIN_LOGGED_IN,
    SET_ADMIN_LOGGED_OUT,

} from "../constants";

export function setAdminLoggedIn(){
    const action = {
        type: SET_ADMIN_LOGGED_IN
    }
    return action;
}
export function setAdminLoggedOut(){
    const action = {
        type: SET_ADMIN_LOGGED_OUT
    }
    return action;
}
