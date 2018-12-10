import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {loginAdmin} from "../../actions/index";
import "./login.scss";

class Login extends Component {
    constructor(props) {
        super(props);
        if (this.props.isAdminLogin) {
            props.history.push("/contests-list");
        }
        this.initialState = {
            username: "",
            password: "",

        };
        this.state = this.initialState;
    }

    loginAdmin(e) {
        e.preventDefault();
        this.props.loginAdmin();
        this.setState({...this.initialState});
    }

    render() {

        return (
            <div className="loginContainer">
                <form>
                    <h1>Admin Login</h1>
                    <div className="formGroup">
                        <input type="text" value={this.state.username}
                            onChange={(e) => this.setState({username: e.target.value})}
                            placeholder="Login"/>
                    </div>
                    <div className="formGroup">
                        <input type="password" value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})} placeholder="Password"/>
                    </div>
                    <button className="submit" onClick={(e) => this.loginAdmin(e)}>Enter</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {isAdminLogin} = state;
    return {isAdminLogin};
};
export default withRouter(connect(mapStateToProps, {loginAdmin})(Login));
