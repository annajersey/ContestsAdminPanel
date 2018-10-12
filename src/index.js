import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import App from "./components/App.js";
import Test from "./components/Test";
const routing = (<BrowserRouter>
    <main>
        <ul>
            <li>
                <Link to="/">App</Link>
            </li>
            <li>
                <Link to="/test">Test</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/test" component={Test} />
        </Switch>
    </main>
</BrowserRouter>)
ReactDOM.render(routing, document.getElementById("root"));
