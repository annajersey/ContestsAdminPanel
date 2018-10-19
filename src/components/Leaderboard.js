import React, {Component} from "react";
import Sortable from "sortablejs";
import Facebook from "../assets/images/fbicon.svg";
import Instagram from "../assets/images/instaicon.svg";
import Submission from "./Submission";

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubmission: false
        }
    }

    componentDidMount() {
        const el = this.list;
        const sortable = Sortable.create(el, {dragClass: "sortable-drag"});
    }

    render() {
        return (
            <div className="boardItems" ref={(e) => this.list = e}>
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5].map((i, index) => {
                        return (<Submission i={i} index={index}/>);
                    }
                )}

            </div>
        );
    }
}

export default Leaderboard;
