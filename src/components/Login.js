import React, { Component } from "react";

import '../styles/App.scss';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Admin Login</h1>
                <form>
                    <input type="text" placeholder="Login" />
                    <input type="password" placeholder="Password"  />
                </form>
            </div>
        );
    }
}

export default Login;
