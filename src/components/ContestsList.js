import React from "react";
import axios from "axios";
import Timer from "./Timer";

class ContestsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contests: []
        };
    }

    componentDidMount() {
        axios.get("http://b.dcodeit.net:8080/smartpay/contest")
            .then(res => {
                this.setState({contests: res.data});
                console.log(res.data);
            });
    }

    onContestClick(id) {
        console.log("/contest/" + id);
        this.props.history.push("/contest/" + id);
    }

    render() {

        return (
            <div className="constestList">
                {this.state.contests.map(contest => {
                    return <div key={contest.id} className="constestBlock">
                        {/*<div style={{'background-image':'url("http://b.dcodeit.net:8080/smartpay/image/'+contest.imageId+'")'}}*/}
                        {/*className="topImage2" onClick={() => this.onContestClick(contest.id)}></div>*/}
                        <img className="topImage" onClick={() => this.onContestClick(contest.id)}
                             src={`http://b.dcodeit.net:8080/smartpay/image/${contest.imageId}`}/>
                        <div className="shortInfo">
                            <h2 onClick={() => this.onContestClick(i)}>{contest.name}</h2>
                            <div className="briefDesc">{contest.description.substring(0, 35)}</div>
                            <div className="info"><span>{contest.address}</span><span className="timer"><img
                                src={require("../assets/images/timer.png")}/><Timer expirationTime={contest.expirationTime} /></span>
                            </div>
                        </div>
                    </div>;
                })}
                {[1, 2, 3].map(i => {
                    return <div key={i} className="constestBlock">
                        <img className="topImage" onClick={() => this.onContestClick(i)}
                             src={require("../assets/images/contests/" + i + ".png")}/>
                        <div className="shortInfo">
                            <h2 onClick={() => this.onContestClick(i)}>Bershka</h2>
                            <div className="briefDesc">One of the best fashion shop</div>
                            <div className="info"><span>12 Giveaway</span><span className="timer"><img
                                src={require("../assets/images/timer.png")}/>36:32:25</span></div>
                        </div>
                    </div>;
                })}
            </div>
        );
    }
}

export default ContestsList;
