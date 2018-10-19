import React, {Component} from "react";
import Facebook from "../assets/images/fbicon.svg";
import Instagram from "../assets/images/instaicon.svg";

class Submission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubmission: false
        };
    }

    render() {
        return (<div className="submissionMember">
            <div className="member" onClick={() => this.setState({showSubmission: true})}>
                <div className="photo">
                    <div className="number">{this.props.index < 14 ? this.props.i : <span className="new">NEW</span>}</div>
                    <img src={require("../assets/images/members/" + this.props.i + ".png")}/>
                </div>
                <div className="userName">Teresa<br/>Norris</div>
                <div className="socials"><Facebook width="22" height="22"/><Instagram width="22"
                    height="22"/>
                </div>
            </div>
            {this.state.showSubmission && <div className="submission">
                <div className="closeSubmission"
                    onClick={() => this.setState({showSubmission: false})}>&times;</div>
                <div className="submissionHeader">
                    <img src={require("../assets/images/members/" + this.props.i + ".png")}/>
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
            </div>}
        </div>);

    }
}

export default Submission;
