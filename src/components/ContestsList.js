import React from "react";
import Timer from "./Timer";
import axios from "axios";
import {ImageLoader} from "react-image-file";

class ContestsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contests: [],
            images: {}
        };
        const AuthStr = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MTMzMjg3N30.DMnrycHPWrnh5p1-407PG55c-LmZxz8UWZPVFhHeiXWpYR-ltYj5U53tvFPp6YMVazXiGHT9KpKGblk2tNU8YQ";

        axios.defaults.headers.common["Authorization"] = AuthStr;
    }

    componentDidMount() {
        axios.get("http://b.dcodeit.net:8080/smartpay/contest").then(res => {
            const contests = res.data;
            contests.forEach(c => {
                axios.get(`http://b.dcodeit.net:8080/smartpay/image/${c.imageId}`,  {
                    headers: {"Content-Type": "image/png", "Charset":"UTF-8"}
                }).then(res => {
                    //window.atob
                    //this.i.innerHTML=btoa(unescape(encodeURIComponent(res.data)))
                    this.setState({images:{...this.state.images, [c.imageId]:res.data}})
                });
            });
            this.setState({contests: res.data});
            console.log(res.data);
        })
            .catch(e => console.log(e))
        ;

    }

    onContestClick(id) {
        console.log("/contest/" + id);
        this.props.history.push("/contest/" + id);
    }

    render() {
console.log(this.state.images)
        return (
            <div className="constestList">
                <div ref={i=>this.i=i}></div>
                {this.state.contests.map(contest => {
                    return <div key={contest.id} className="constestBlock">
                        {/*<div style={{'background-image':'url("http://b.dcodeit.net:8080/smartpay/image/'+contest.imageId+'")'}}*/}
                        {/*className="topImage2" onClick={() => this.onContestClick(contest.id)}></div>*/}
                        <img className="topImage" onClick={() => this.onContestClick(contest.id)}
                             src={`data:image/png;base64,${this.state.images[contest.imageId]}`}

                            />
                        <ImageLoader file={this.state.images[contest.imageId]} alt='some text'/>
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
