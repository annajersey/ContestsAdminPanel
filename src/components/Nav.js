import {NavLink} from "react-router-dom";
import React from "react";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <nav>
                <div>
                    <NavLink to="/create-contest" activeClassName="active">Create Contest</NavLink>
                    <NavLink to="/test2" activeClassName="active">Contests List</NavLink>
                    <NavLink to="/test3" activeClassName="active">Settings</NavLink>
                </div>
            </nav>
        );
    }
}

export default Nav;
