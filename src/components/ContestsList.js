import React from "react";
import Timer from "./Timer";
import axios from "axios";
import {ImageLoader} from "react-image-file";
import $ from "jquery";
import {apiBaseUrl} from "../constants";
class ContestsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contests: [],
            images: {}
        };
        this.AuthStr = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MTMzMjg3N30.DMnrycHPWrnh5p1-407PG55c-LmZxz8UWZPVFhHeiXWpYR-ltYj5U53tvFPp6YMVazXiGHT9KpKGblk2tNU8YQ";
        axios.defaults.headers.common["Authorization"] = this.AuthStr;
    }
    base64Encode(str) {
        var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var out = "", i = 0, len = str.length, c1, c2, c3;
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += CHARS.charAt(c1 >> 2);
                out += CHARS.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += CHARS.charAt(c1 >> 2);
                out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                out += CHARS.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += CHARS.charAt(c3 & 0x3F);
        }
        return out;
    }
    componentDidMount() {
        axios.get(apiBaseUrl+"/contest").then(res => {
            const contests = res.data;
            contests.forEach(c => {
                $.ajax({
                    url: `${apiBaseUrl}/image/${c.imageId}`,
                    method: "GET",
                    mimeType: "text/plain; charset=x-user-defined",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("Authorization", AuthStr);
                    },
                    success:  (data) => {
                        this.setState({images:{...this.state.images, [c.imageId]:'data:image/jpeg;base64,' + this.base64Encode(data)}})
                    }
                });

            });
            this.setState({contests: res.data});
            console.log(res.data);
        })
            .catch(e => console.log(e))
        ;
    }

    onContestClick(id) {
        this.props.history.push("/contest/" + id);
    }

    render() {
console.log(this.state.images)
        return (
            <div className="constestList">

                {this.state.contests.map(contest => {
                    return <div key={contest.id} className="constestBlock">
                        <img className="topImage" onClick={() => this.onContestClick(contest.id)}
                             src={this.state.images[contest.imageId]}

                            />
                        <div className="shortInfo">
                            <h2 onClick={() => this.onContestClick(i)}>{contest.name}</h2>
                            <div className="briefDesc">{contest.description.substring(0, 35)}</div>
                            <div className="info"><span>{contest.address}</span><span className="timer"><img
                                src={require("../assets/images/timer.png")}/><Timer
                                expirationTime={contest.expirationTime}/></span>
                            </div>
                        </div>
                    </div>;
                })}

            </div>
        );
    }
}

export default ContestsList;
