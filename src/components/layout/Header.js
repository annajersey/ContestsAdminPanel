import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Notifications from "../../assets/images/notification.svg";
import Icon from "../../assets/images/icon.svg";
import Logo from "../../assets/images/Logo.svg";
import {setAdminLoggedOut} from "../../actions/index";
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="logo"><img src={require("../../assets/images/logo.png")}/></div>
                {
                    this.props.isAdminLogin &&
                    <div className="userPanel">
                        <div className="notifications"><Notifications/></div>
                        <div className="profile" onClick={() => {
                            this.props.setAdminLoggedOut();
                            this.props.history.push("/login");
                        }}><Icon/><span>Admin</span></div>
                    </div>
                }
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    const {isAdminLogin} = state;
    return {isAdminLogin};
};
export default withRouter(connect(mapStateToProps, {setAdminLoggedOut})(Header));
