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
                    <NavLink to="/contests-list" activeClassName="active">Contests List</NavLink>
                    <NavLink to="/settings" activeClassName="active">Settings</NavLink>
                </div>
            </nav>
        );
    }
}

export default Nav;
