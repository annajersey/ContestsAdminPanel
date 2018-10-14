import React, {Component} from "react";
import {withRouter} from "react-router-dom";
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <div className="logo">SmartPay</div>
                {
                    this.props.isAdminLogin &&
                    <div className="userPanel">
                        <div className="notifications"></div>
                        <div className="profile" onClick={()=>{localStorage.setItem("isLoggedIn", ""); this.props.history.push("/login");}}>Admin</div>
                    </div>
                }
            </header>
        );
    }
}
export default withRouter(Header);
