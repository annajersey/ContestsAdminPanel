import Facebook from "../assets/images/fbicon.svg";
import Instagram from "../assets/images/instaicon.svg";
import {FacebookShareButton, FacebookShareCount} from "react-share";
import React from "react";
import ReactFBLike from 'react-fb-like';
class Submission extends React.Component {
    constructor(props) {
        super(props);
        this.submissionId = this.props.submissionId ? this.props.submissionId : 1;
    }

    render() {
        return (
            <div>
                <div className="submissionHeader">
                    <img src={require("../assets/images/members/" + this.submissionId + ".png")}/>
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
                <FacebookShareButton url={baseUrl+"/submission/"+this.submissionId} quote="We'd love your posts to generate enthusiasm about buying the
                    product. This could be images of our coffee being made in a cup, mug or jar. We'd love
                    your
                    posts to be coffee-inspired, showcasing our brand alongside your daily routine. In your

                    caption,
                    talk about our product and tell the best coffee offer to your followers!">Share to Facebook</FacebookShareButton>
                {/*<FacebookShareCount url={baseUrl+"/submission/"+this.submissionId} />*/}
                {/*<ReactFBLike  appId="717589285046812" version="v2.12" />*/}
                <img className="submissionImg" src={require("../assets/images/contestImage.png")}/>

            </div>
        );
    }
}

export default Submission;
