import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login";
import Header from "./components/Header";
import {config} from "./config";
import {Provider} from "react-redux";
import ContestsList from "./components/ContestsList";

class App extends React.Component {
    render() {
        return (<Provider store={config.store}><BrowserRouter basename={basePath}>
            <main><Header/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Home} />
                </Switch>
            </main>
        </BrowserRouter></Provider>);
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
