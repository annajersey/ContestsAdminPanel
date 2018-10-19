import React, {Component} from "react";
import Sortable from "sortablejs";
import Facebook from "../assets/images/fbicon.svg";
import Instagram from "../assets/images/instaicon.svg";

class Leaderboard extends Component {
    componentDidMount() {
        const el = this.list;
        const sortable = Sortable.create(el, {dragClass: "sortable-drag"});
    }

    render() {
        return (
            <div className="boardItems" ref={(e) => this.list = e}>
                {[1].map((i, index) => {
                    return (<div className="submissionMember">
                        <div className="member">
                            <div className="photo">
                                <div className="number">{index < 15 ? i : <span className="new">NEW</span>}</div>
                                <img src={require("../assets/images/members/" + i + ".png")}/>
                            </div>
                            <div className="userName">Teresa<br/>Norris</div>
                            <div className="socials"><Facebook width="22" height="22"/><Instagram width="22"
                                height="22"/>
                            </div>
                        </div>
                        <div className="submission">
                            <div className="closeSubmission">&times;</div>
                            <div className="submissionHeader">
                                <img src={require("../assets/images/members/" + i + ".png")}/>
                                <div className="userName">Teresa<br/>Norris</div>
                                <Facebook width="14" height="14"/><Instagram width="14" height="14"/>

                            </div>

                            <div className="submissionTitle">Content text</div>
                            <div className="submissionText">We'd love your posts to generate enthusiasm about buying the
                                    product. This could be images of our coffee being made in a cup, mug or jar. We'd love
                                    your
                                    posts to be coffee-inspired, showcasing our brand alongside your daily routine. In your
                                    caption,
                                    talk about our product and tell the best coffee offer to your followers!
                            </div>
                            <img className="submissionImg" src={require("../assets/images/contestImage.png")}/>
                        </div>
                    </div>);
                }
                )}

            </div>
        );
    }
}

export default Leaderboard;
