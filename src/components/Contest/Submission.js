import Facebook from "../../assets/images/fbicon.svg";
import Instagram from "../../assets/images/instaicon.svg";
import {FacebookShareButton} from "react-share";
import {FacebookProvider, Like} from "react-facebook";
import React from "react";
import axios from "axios";

class Submission extends React.Component {
    constructor(props) {
        super(props);
        this.submissionId = this.props.submissionId ? this.props.submissionId : props.match.params.submissionId;
        this.state = {
            likes: 0,
            share: 0
        };
    }

    componentDidMount() {
        console.log(baseUrl + "/submission/" + this.submissionId);
        axios.get("https://graph.facebook.com/v3.1/?id=http%3A%2F%2Fdcodeit.net%2Fanna.bogomiagkova%2Fsmartpay%2Fsubmission%2F5" +
            "&fields=engagement" +
            "&access_token=EAAE45xpG5o4BABhFrnZC8kqLlaFKWC3aaWOQCZAAxFw61sxqLmgMrjLUIX9V1TUNnhS2YMmd7jZAtVQ1obU08r2dyDwgm1VIy4F6OZASmyWAJbWp4TQbsND86UiiZB3fIZABZCWDFPbJMHJkoN57FiDSQvi2nozwsIZD\n"
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    likes: response.data.engagement.reaction_count,
                    share: response.data.engagement.share_count
                });
            });
    }

    render() {
        return (
            <div>
                <div className="submissionHeader">
                    <img src={require("../../assets/images/members/" + this.submissionId + ".png")}/>
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
                <FacebookShareButton style={{"cursor": "pointer"}} url={baseUrl + "/submission/" + this.submissionId}
                    quote="We'd love your posts to generate enthusiasm about buying the
                product. This could be images of our coffee being made in a cup, mug or jar. We'd love
                your
                posts to be coffee-inspired, showcasing our brand alongside your daily routine. In your
                caption,
                talk about our product and tell the best coffee offer to your followers!">Share to
                Facebook</FacebookShareButton>

                <br/><br/>
                {/*{<FacebookShareCount url={baseUrl + "/submission/" + this.submissionId}/>}*/}
                <FacebookProvider appId="344040206165646">
                    <Like href={baseUrl + "/submission/" + this.submissionId} showFaces/>
                </FacebookProvider>
                <img className="submissionImg" src={require("../../assets/images/contestImage.png")}/>

            </div>
        );
    }
}

export default Submission;
