import React, {Component} from "react";

import "../assets/styles/styles.scss";
import axios from "axios";
import {apiBaseUrl} from "../constants";

class Login extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("token")) {
            props.history.push("/contests-list");
        }
        this.initialState = {
            username: "",
            password: "",

        };
        this.state = this.initialState;
    }

    loginAdmin(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: apiBaseUrl + "/login",
            data: {"username": this.state.username, "password": this.state.password},
            config: {headers: {"Content-Type": "application/json;charset=UTF-8"}}
        })

            .then((response) => {
                console.log("response", response.data.token);
                if (!response.data.token) {this.onLoginError();}
                else {
                    localStorage.setItem("token", response.data.token);
                    this.props.setLoggedIn();
                    this.props.history.push("/contests-list");
                }
            })
            .catch((error) => {
                this.onLoginError();
                console.log("error", error);
            });

    }

    onLoginError() {
        this.setState({...this.initialState});
    }

    render() {

        return (
            <div className="loginContainer">
                <form>
                    <h1>Admin Login</h1>
                    <div className="formGroup">
                        <input type="text" value={this.state.username}
                            onChange={(e) => this.setState({username: e.target.value})}
                            placeholder="Login"/>
                    </div>
                    <div className="formGroup">
                        <input type="password" value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})} placeholder="Password"/>
                    </div>
                    <button className="submit" onClick={(e) => this.loginAdmin(e)}>Enter</button>
                </form>
            </div>
        );
    }
}

export default Login;
