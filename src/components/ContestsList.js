import React, { Component } from "react";

class ContestsList extends React.Component {
    onContestClick(id){
        this.props.history.push("/contest/"+id);
    }
    render() {

        return (
            <div className="constestList">
                {[1,2,3].map(i => {
                    return <div className="constestBlock" onClick={()=>this.onContestClick(i)}>
                        <img src={require("../assets/images/listimg.png")}  />
                        <h2>Bershka</h2>
                        <div className="brief">One of the best fashion shop</div>
                        <div className="info"><span>12 Giveaway</span><span>36:32:25</span></div>
                    </div>
                })}
            </div>
        );
    }
}

export default ContestsList;
