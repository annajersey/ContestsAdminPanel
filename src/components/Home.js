import React, {Component} from "react";
import {Link, Route, Switch} from "react-router-dom";
import CreateContest from "./CreateContest";
import ContestsList from "./ContestsList";
import Contest from "./Contest";
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
                    <Route  path="/contests-list" component={ContestsList} />
                    <Route  path="/contest/:id" component={Contest} />
                </div>
            </div>

        );
    }
}

export default Home;
