import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login";
import Header from "./components/Header";
import {config} from "./config";
import history from "./config/history";

class App extends React.Component {
    render() {
        return (<Provider store={config.store}><Router basename={basePath} history={history}>
            <main><Header/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </main>
        </Router></Provider>);
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
