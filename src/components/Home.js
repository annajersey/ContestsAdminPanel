import React, {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import CreateContest from "./CreateContest/CreateContest";
import ContestsList from "./ContestsList/ContestsList";
import Contest from "./Contest/Contest";
import Nav from "./layout/Nav";
import NotFound from "./NotFound";
import Leaderboard from "./Contest/Leaderboard";
import Submission from "./Contest/Submission";
import connect from "react-redux/es/connect/connect";


class Home extends Component {
    constructor(props) {
        super(props);
        if (!props.isAdminLogin) {
            props.history.push("/login");
        }
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

const mapStateToProps = (state) => {
    const {isAdminLogin} = state;
    return {isAdminLogin};
};
export default withRouter(connect(mapStateToProps)(Home));
