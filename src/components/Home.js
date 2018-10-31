import React, {Component} from "react";
import {Link, Route, Switch} from "react-router-dom";
import CreateContest from "./CreateContest";
import ContestsList from "./ContestsList";
import Contest from "./Contest";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Leaderboard from "./Leaderboard";
import Submission from "./Submission";

class Home extends Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem("token")) props.history.push("/login");
    }

    render() {
        return (
            <div className="container">
                <Nav/>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={ContestsList}/>
                        <Route path="/create-contest" component={CreateContest}/>
                        <Route path="/contests-list" component={ContestsList}/>
                        <Route path="/contest/:id" component={Contest}/>
                        <Route path="/leaderboard" component={Leaderboard}/>
                        <Route path="/submission/:submissionId" component={Submission}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default Home;
