import React, {Component} from "react";
import Leaderboard from "./Leaderboard";
import TimerIcon from '../assets/images/timer-w.svg';
import * as axios from "axios";
import Timer from "./Timer";

class Contest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "l",
            contest: {
                name: 'Bershka',
                address: 'Yoga Trapeze - SAMPLING',
                value: 10000,
                expirationTime: -1
            }
        };
        const AuthStr = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MTMzMjg3N30.DMnrycHPWrnh5p1-407PG55c-LmZxz8UWZPVFhHeiXWpYR-ltYj5U53tvFPp6YMVazXiGHT9KpKGblk2tNU8YQ";
        axios.defaults.headers.common["Authorization"] = AuthStr;
    }

    componentDidMount() {
        axios({
            url: apiBaseUrl+"/smartpay/contest/" + this.props.match.params.id,
        })
            .then(response => {

                this.setState({contest: response.data});
            })
            .catch((response) => {
                console.log("error", response);
            });
    }

    render() {
        return (
            <div className="constestPage">
                <div className="header">
                    <div><h1>{this.state.contest.name}</h1><h2>{this.state.contest.address}</h2></div>
                    <div><span>Campaign value:</span><span className="contestValue">{this.state.contest.value}$</span>
                    </div>
                    <div className="contestTime"><TimerIcon/>&nbsp;&nbsp;{this.state.contest.expirationTime &&
                    <Timer expirationTime={this.state.contest.expirationTime}/>}</div>
                </div>
                <div className="contest">
                    {/*Contest <h3>ID: {this.props.match.params.id}</h3>*/}
                    <div className="switcher">
                        <button className={this.state.page === "l" ? "active leaderboardButton" : "leaderboardButton"}
                                onClick={() => this.setState({page: "l"})}>Leaderboard
                        </button>
                        <button className={this.state.page === "b" ? "active briefButton" : "briefButton"}
                                onClick={() => this.setState({page: "b"})}>Brief
                        </button>
                    </div>
                    <div className="contestContent">
                        {this.state.page === "l" && <div className="leaderBoard">
                            <Leaderboard/>

                        </div>}
                        {this.state.page === "b" &&
                        <div className="brief">
                            <div>
                                <h3>{this.state.contest.name}</h3>
                                {this.state.contest.description}
                            </div>
                            <div>
                                <h3>Content text</h3>
                                We'd love your posts to generate enthusiasm about buying the product. This could be
                                images of our coffee being made in a cup, mug or jar. We'd love your posts to be
                                coffee-inspired, showcasing our brand alongside your daily routine. In your caption,
                                talk about our product and tell the best coffee offer to your followers!
                            </div>
                            {this.state.contest.imageId &&
                            <img src={`http://b.dcodeit.net:8080/smartpay/image/${this.state.contest.imageId}`}/>}
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contest;
