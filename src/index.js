import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login";
import Header from "./components/Header";
import "./assets/styles/styles.scss";
import NotFound from "./components/NotFound";

class App extends React.Component {
    constructor() {
        super();
        this.state = {isAdminLogin: localStorage.isLoggedIn};
    }

    setLoggedIn() {
        localStorage.setItem("isLoggedIn", true);
        this.setState({
            isAdminLogin: true
        });
    }

    render() {
        return (<BrowserRouter basename="/">
            <main><Header isAdminLogin={this.state.isAdminLogin} />
                <Switch>
                    <Route exact path="/login"
                        render={(props) => <Login {...props} setLoggedIn={() => this.setLoggedIn()}/>}/>
                    <Route  path="/" render={(props) => (
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
