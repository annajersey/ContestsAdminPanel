import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Home from "./components/Home.js";
import Login from "./components/Login";

const isAdminLogin = false;
const routing = (<BrowserRouter>
    <main>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route render={(props) => (
                isAdminLogin ? (
                    <Home/>
                ) : (
                    <Redirect to="/login"/>
                )
            )}/>
        </Switch>
    </main>
</BrowserRouter>)

ReactDOM.render(routing, document.getElementById("root"));
