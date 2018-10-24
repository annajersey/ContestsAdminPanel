import React from "react";
import Timer from "./Timer";
import axios from "axios";

class ContestsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contests: []
        };
    }

    componentDidMount() {
        // fetch("http://b.dcodeit.net:8080/smartpay/contest", {
        //     method: "GET",
        //     headers: {
        //         "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MTI0ODA2M30.a8kV5un6enpx3fqMDEcpsMNdQmO6MXt7IH3reOVjuz9H1Tcl-TxdEFtow_nkRx21cSLrjpmqoXIzep5ITgF8rQ"
        //     }
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw Error("Network request failed");
        //         }
        //         return response;
        //     })
        //     .then(d => d.json())
        //     .then(result => {
        //         console.log(result);
        //     }, () => {
        //
        //         console.log("Request Failed");
        //
        //     });
        // axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MTI0ODA2M30.a8kV5un6enpx3fqMDEcpsMNdQmO6MXt7IH3reOVjuz9H1Tcl-TxdEFtow_nkRx21cSLrjpmqoXIzep5ITgF8rQ"
        // ;
         let url = "http://b.dcodeit.net:8080/smartpay/contest";
 let AuthStr = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MDM4MzY1N30.TmNoWJZMV_LbWi-y8NlkjezVVWiIoQZe9RBTbKSrKiqpo7p_htCjWGqjIiGv5ICpDKS5i-jvGbu3fahSNzkL7A"

        // axios.get("http://b.dcodeit.net:8080/smartpay/contest",
        //     { headers: {
        //             "Content-Type": "application/x-www-form-urlencoded",
        //         Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MTI0ODA2M30.a8kV5un6enpx3fqMDEcpsMNdQmO6MXt7IH3reOVjuz9H1Tcl-TxdEFtow_nkRx21cSLrjpmqoXIzep5ITgF8rQ"
        //
        //     },withCredentials: true }
        // )
        axios({ method: 'get', url: url, headers: { 'Authorization': AuthStr } })
        // axios({
        //     method: "get",
        //     url: "http://b.dcodeit.net:8080/smartpay/contest",
        //
        //     config: {
        //        // withCredentials: true,
        //         headers: {
        //            // "Content-Type": "application/x-www-form-urlencoded",
        //             "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kZXIua3Vwcmlrb3ZAY29kZWl0LmNvbS51YSIsImV4cCI6MTU0MDM4MzY1N30.TmNoWJZMV_LbWi-y8NlkjezVVWiIoQZe9RBTbKSrKiqpo7p_htCjWGqjIiGv5ICpDKS5i-jvGbu3fahSNzkL7A"
        //
        //         }
        //     }
        // })
            .then(res => {
                //this.setState({contests: res.data});
                console.log(res.data);
            })
            .catch(e=>console.log(e))
        ;
//
//         axios.get(url, { headers: { Authorization: AuthStr } })
//             .then(response => {
//                 // If request is good...
//                 console.log(response.data);
//             })
//             .catch((error) => {
//                 console.log('error ' + error);
//             });


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
                                src={require("../assets/images/timer.png")}/><Timer
                                expirationTime={contest.expirationTime}/></span>
                            </div>
                        </div>
                    </div>;
                })}
                {/*{[1, 2, 3].map(i => {*/}
                {/*return <div key={i} className="constestBlock">*/}
                {/*<img className="topImage" onClick={() => this.onContestClick(i)}*/}
                {/*src={require("../assets/images/contests/" + i + ".png")}/>*/}
                {/*<div className="shortInfo">*/}
                {/*<h2 onClick={() => this.onContestClick(i)}>Bershka</h2>*/}
                {/*<div className="briefDesc">One of the best fashion shop</div>*/}
                {/*<div className="info"><span>12 Giveaway</span><span className="timer"><img*/}
                {/*src={require("../assets/images/timer.png")}/>36:32:25</span></div>*/}
                {/*</div>*/}
                {/*</div>;*/}
                {/*})}*/}
            </div>
        );
    }
}

export default ContestsList;
