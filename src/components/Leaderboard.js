import React, {Component} from "react";
import Sortable from "sortablejs";
import Facebook from "../assets/images/fbicon.svg";
import Instagram from "../assets/images/instaicon.svg";
import Like from "../assets/images/Like.svg";
import Repost from "../assets/images/Repost.svg";
import {FacebookShareButton, FacebookShareCount} from 'react-share';
import Submission from "./Submission"
class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubmission: -1,
            showSocial:-1
        };
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    componentDidMount() {
        const el = this.list;
        const sortable = Sortable.create(el, {dragClass: "sortable-drag"});
        document.addEventListener('mousedown', this.handleClickOutside.bind(this));
    }

    handleClickOutside(event) {
        if (this.popup && !this.popup.contains(event.target)) {
            this.setState({showSubmission: -1})
        }
    }

    render() {
        return (
            <div className="boardItems" ref={(e) => this.list = e}>
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5].map((i, index) => {
                        return (<div className="submissionMember">
                            <div className="member">
                                <div className="photo" onClick={() => this.setState({showSubmission: index})}>
                                    <div className="number">{index < 13 ? i : <span className="new">NEW</span>}
                                        <div className="socialPopup">
                                            <div className="socialContent">
                                                <div>Facebook:</div>
                                                <div>5<Like />5<Repost/></div>
                                                <div>Instagram:</div>
                                                <div>3<Like /></div>
                                            </div>
                                            <div className="arrow"></div>
                                        </div>
                                    </div>
                                    <img src={require("../assets/images/members/" + i + ".png")}/>
                                </div>
                                <div className="userName">Teresa<br/>Norris</div>
                                <div className="socials"><Facebook width="22" height="22"/><Instagram width="22"
                                                                                                      height="22"/>
                                </div>

                            </div>
                            {this.state.showSubmission === index &&
                            <div className="submission" ref={(p) => this.popup = p}>
                                <div className="closeSubmission"
                                     onClick={() => this.setState({showSubmission: -1})}>&times;</div>
                                <Submission submissionId={i}/>

                            </div>}
                        </div>);
                    }
                )}

            </div>
        );
    }
}

export default Leaderboard;
