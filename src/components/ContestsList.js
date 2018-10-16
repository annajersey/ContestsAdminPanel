import React from "react";

class ContestsList extends React.Component {
    onContestClick(id) {
        this.props.history.push("/contest/" + id);
    }

    render() {

        return (
            <div className="constestList">
                {[1, 2, 3].map(i => {
                    return <div className="constestBlock">
                        <img className="topImage"  onClick={() => this.onContestClick(i)} src={require("../assets/images/contests/" + i + ".png")}/>
                        <div className="shortInfo">
                            <h2 onClick={() => this.onContestClick(i)}>Bershka</h2>
                            <div className="briefDesc">One of the best fashion shop</div>
                            <div className="info"><span>12 Giveaway</span><span className="timer"><img src={require("../assets/images/timer.png")} />36:32:25</span></div>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}

export default ContestsList;
