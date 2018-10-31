import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Notifications from '../assets/images/notification.svg';
import Icon from '../assets/images/icon.svg';
import Logo from '../assets/images/logo.svg';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="sandwich">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="logo"><img src={require("../assets/images/logo.png")}/></div>
                {
                    localStorage.getItem("token")  &&
                    <div className="userPanel">
                        <div className="notifications"><Notifications/></div>
                        <div className="profile" onClick={() => {
                            localStorage.removeItem("token");
                            this.props.history.push("/login");
                        }}><Icon/><span>Admin</span></div>
                    </div>
                }
            </header>
        );
    }
}

export default withRouter(Header);
