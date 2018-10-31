import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login";
import Header from "./components/Header";
class App extends React.Component {
    constructor() {
        super();
        this.state = {isAdminLogin: localStorage.token ? true : false};
    }

    setLoggedIn() {
        this.setState({
            isAdminLogin: true
        });
    }

    render() {
        return (<BrowserRouter basename={basePath}>
            <main><Header isAdminLogin={this.state.isAdminLogin}/>
                <Switch>
                    <Route path="/login"
                        render={(props) => <Login {...props} />}/>
                    <Route path="/" render={(props) => (
                        this.state.isAdminLogin ? (
                            <Home {...props} />
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>

                </Switch>
            </main>
        </BrowserRouter>);
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
