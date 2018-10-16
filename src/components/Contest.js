import React, {Component} from "react";
import Leaderboard from "./Leaderboard";



class Contest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "l"
        };
    }

    render() {
        return (
            <div>

                <div className="header">Contest <h3>ID: {this.props.match.params.id}</h3></div>
                <div className="contest">

                    <div className="switcher">
                        <button className={this.state.page === "l" ? "active" : ""}
                                onClick={() => this.setState({page: "l"})}>Leaderboard
                        </button>
                        <button className={this.state.page === "b" ? "active" : ""}
                                onClick={() => this.setState({page: "b"})}>Brief
                        </button>
                    </div>
                    <div className="contestContent">
                        {this.state.page === "l" && <div className="leaderBoard">
                            <Leaderboard />

                        </div>}
                        {this.state.page === "b" &&
                        <div className="brief">Some text about the brand. This could be images of our coffee being made
                            in a cup, mug or jar. We'd love your posts to be coffee-inspired, showcasing our brand
                            alongside your daily routine. In your caption, talk about our product and tell the best
                            coffee offer to your followers!</div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contest;
