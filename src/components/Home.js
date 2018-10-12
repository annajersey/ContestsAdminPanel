import React, {Component} from "react";

import '../styles/App.scss';
import {Link, Route} from "react-router-dom";
import Test from "./Test";
import Test2 from "./Test2";

class Home extends Component {

    render() {
        return (
            <div>
                Header
                <div className="container">
                    <ul>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/test2">Test2</Link></li>
                    </ul>
                    <Route path="/test" component={Test} />
                    <Route path="/test2" component={Test2} />
                </div>
            </div>

        );
    }
}

export default Home;
