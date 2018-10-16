import React, {Component} from "react";
import Sortable from 'sortablejs'

class Leaderboard extends Component {
    componentDidMount() {
        var el = this.list;
        var sortable = Sortable.create(el);
    }

    render() {
        return (
            <div className="boardItems" ref={(e) => this.list = e}>
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map(i => <div className="member">
                    <div className="photo">
                        <div className="number">5</div>
                        <img src={require("../assets/images/members/" + i + ".png")}/></div>
                </div>)}
            </div>
        );
    }
}

export default Leaderboard
