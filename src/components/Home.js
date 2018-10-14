import React, {Component} from "react";
import {Link, Route, Switch} from "react-router-dom";
import CreateContest from "./CreateContest";
import Test2 from "./Test2";
import Nav from "./Nav";
import NotFound from "./NotFound";

class Home extends Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem("isLoggedIn")) props.history.push("/login");
    }
    render() {
        return (
            <div className="container">
                <Nav />
                <div className="content">
                    <Route  path="/create-contest" component={CreateContest} />
                    <Route  path="/test2" component={Test2} />
                    {/*<Route component={NotFound} />*/}
                </div>
            </div>

        );
    }
}

export default Home;
