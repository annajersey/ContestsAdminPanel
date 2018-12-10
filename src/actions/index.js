import {
    apiBaseUrl,
    SET_ADMIN_LOGGED_IN,
    SET_ADMIN_LOGGED_OUT

} from "../constants";
import axios from "axios";
import history from "../config/history";

export const loginAdmin = (username, password) => dispatch => {
    axios({
        method: "GET",
        url: apiBaseUrl + "/users",
        data: {"username": username, "password": password},
        config: {headers: {"Content-Type": "application/json;charset=UTF-8"}}
    })

        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                dispatch(setAdminLoggedIn(response.data.token));
                history.push("/");
            }
        })
        .catch((error) => {
            console.log("error", error);
        });
};

export function setAdminLoggedIn(token) {
    const action = {
        type: SET_ADMIN_LOGGED_IN,
        token
    };
    return action;
}

export function setAdminLoggedOut() {
    return dispatch => {
        localStorage.removeItem("token");
        dispatch({
            type: SET_ADMIN_LOGGED_OUT
        })
    }
}

