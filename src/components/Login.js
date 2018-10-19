import React, {Component} from "react";

import "../assets/styles/styles.scss";
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("isLoggedIn")) props.history.push("/contests-list");
        this.initialState = {
            login: "",
            password: "",

        };
        this.state =  this.initialState;
    }

    loginAdmin(e) {
        e.preventDefault();
        if (this.state.login === "admin" && this.state.password === "admin") {
            this.props.setLoggedIn();
            this.props.history.push("/contests-list");
        } else {
            this.setState({...this.initialState});
        }
    }

    render() {

        return (
            <div className="loginContainer">
                <form>
                    <h1>Admin Login</h1>
                    <div className="formGroup">
                        <input type="text" value={this.state.login} onChange={(e) => this.setState({login: e.target.value})}
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
