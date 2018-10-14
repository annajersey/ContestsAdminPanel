import React from "react";

class CreateContest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <form className="createContest">
                <h1>Create New Contest</h1>
                <div className="formGroup">
                    <label htmlFor="brandName">Brand name</label>
                    <input type="text" name="brandName" id="brandName" placeholder="Enter a brand name"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="brief">Brief</label>
                    <textarea name="brief" id="brief" placeholder="Enter a brief description"
                        maxlength="500"></textarea>
                </div>
                <div className="formGroup">
                    <label htmlFor="hashtags">Hashtags</label>
                    <input type="text" name="hashtags" id="hashtags"
                        placeholder="Up to 5 hashtags, separate with space"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="timeframe">Timeframe</label>
                    <select name="timeframe" id="timeframe">
                        <option value="10">10 days</option>
                        <option value="20"> 20 days</option>
                        <option value="30" selected>30 days</option>
                    </select>
                </div>
                <div className="formGroup">
                    <label htmlFor="value">Value</label>
                    <input type="text" name="value" id="value" placeholder="$$$$"/>
                </div>
                <button>Submit contest</button>
            </form>

        );
    }
}

export default CreateContest;
