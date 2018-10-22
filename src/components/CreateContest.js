import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Photo from "../assets/images/photo.svg";
import Video from "../assets/images/video.svg";
import * as axios from "axios";

class CreateContest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            hashtags: "",
            timeframe: 30,
            startdate: moment(),
            value: "",
            image: null,
            errors: []

        };

    }

    Send(e) {
        e.preventDefault();
        const errors = [];
        const expirationTime = this.state.startdate.add(this.state.timeframe, "days").format();
        const formData = new FormData(this.form);
        formData.append("expirationTime", expirationTime);
        formData.append("address", this.state.hashtags);
        if (this.state.image !== null) {formData.append("image", this.state.image, this.state.image.name);}
        else {
            errors.push("Please select image");
        }
        if (!this.state.name) {errors.push("Please enter contest name");}
        if (!this.state.description) {errors.push("Please enter contest brief");}
        if (!this.state.value) {errors.push("Please enter contest value");}
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        if (errors.length > 0) {
            this.setState({errors});
        }
        else {
            axios({
                method: "post",
                url: "http://b.dcodeit.net:8080/smartpay/contest",
                data: formData,
                config: {headers: {"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"}}
            })
                .then(response => {
                    console.log(response);
                    this.props.history.push("/contests-list/");
                })
                .catch((response) => {
                    console.log("error", response);
                });
        }
    }

    fileChangedHandler = (event) => {
        this.setState({image: event.target.files[0]});
    }

    render() {
        return (
            <form className="createContest" ref={(f) => this.form = f}>
                <h1>Create new contest</h1>
                <div className="errors">{this.state.errors.map(e => <div>{e}</div>)}</div>
                <div className="formGroup">
                    <label htmlFor="name">Brand name</label>
                    <input type="text" name="name" id="name" value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        placeholder="Enter a brand name"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="description">Brief</label>
                    <textarea value={this.state.description}
                        onChange={(e) => this.setState({description: e.target.value})}
                        name="description" id="description" placeholder="Enter a description description"
                        maxLength="500"></textarea>
                </div>
                <div className="formGroup">
                    <label htmlFor="uploadPhoto"></label>
                    <div className="upload"><Photo/>upload photo&nbsp;<span>(5 max)</span><input className="uploadInput"
                        type="file"
                        onChange={(e) => this.fileChangedHandler(e)}/>
                    </div>
                    <div className="upload"><Video/>upload video&nbsp;<span>(2 max)</span></div>
                </div>
                <div className="formGroup">
                    <label htmlFor="hashtags">Hashtags</label>
                    <input type="text" value={this.state.hashtags}
                        onChange={(e) => this.setState({hashtags: e.target.value})} name="hashtags" id="hashtags"
                        placeholder="Up to 5 hashtags, separate with space"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="timeframe">Timeframe</label>
                    <select defaultValue={this.state.timeframe}
                        onChange={(e) => this.setState({timeframe: e.target.value})} name="timeframe"
                        id="timeframe">
                        <option value="10">10 days</option>
                        <option value="20">20 days</option>
                        <option value="30">30 days</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label htmlFor="startdate">Start date</label>
                    <DatePicker name="startdate" id="startdate"
                        value={this.state.startdate.format("MM/DD/YY")}
                        onChange={(e) => this.setState({startdate: e})}
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="value">Value</label>
                    <input value={this.state.contestValue}
                        onChange={(e) => this.setState({value: e.target.value})} type="text"
                        name="value" id="value" placeholder="$$$$"/>
                </div>
                <button className="submit" onClick={(e) => this.Send(e)}>Submit contest</button>

            </form>

        );
    }
}

export default CreateContest;
