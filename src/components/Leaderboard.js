import React, {Component} from "react";
import Sortable from 'sortablejs'
import Facebook from '../assets/images/fbicon.svg';
import Instagram from '../assets/images/instaicon.svg';
class Leaderboard extends Component {
    componentDidMount() {
        var el = this.list;
        var sortable = Sortable.create(el,{dragClass: "sortable-drag"});
    }

    render() {
        return (
            <div className="boardItems" ref={(e) => this.list = e}>
                {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2].map((i,index )=>
                    <div className="member">
                        <div className="photo">
                            <div className="number">{index<15 ? i : <span className="new">NEW</span>}</div>
                            <img src={require("../assets/images/members/" + i + ".png")}/>
                        </div>
                        <div className="userName">Teresa<br />Norris</div>
                        <div className="socials"><Facebook width="22" height="22" /><Instagram width="22"  height="22"/></div>
                    </div>
                )}
            </div>
        );
    }
}

export default Leaderboard
