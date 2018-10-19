import React, {Component} from "react";
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timer:this.msToTime(props.expirationTime)};

    }
    componentDidMount(){
        this.interval = setInterval(()=>this.setState({timer:this.msToTime(this.props.expirationTime)}),1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    msToTime(expirationTime){
        var dateDiff = new Date(expirationTime) - new Date();
        if(dateDiff<0) return 0;
        let seconds = (dateDiff / 1000);
        let minutes = parseInt(seconds / 60, 10);
        seconds = parseInt(seconds % 60);
        let hours = parseInt(minutes / 60, 10);
        minutes = minutes % 60;
        if(hours<10) hours='0'+hours;
        if(minutes<10) minutes='0'+minutes;
        if(seconds<10) seconds='0'+seconds;
        return hours + ":" + minutes + ":" + seconds;
    }

    render() {
        return (
            <React.Fragment>
                {this.state.timer}
            </React.Fragment>
        );
    }
}


export default Timer;
