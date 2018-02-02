import React, { Component } from 'react';
import '../style/modules/App.css';


class Result extends Component {
    componentDidMount() {
        fetch('https://1pssztfj82.execute-api.us-east-1.amazonaws.com/dev/slotsinfo/get').then(results => {
            return results.json();
        }).then(function (data) {
            data.map((value) => {
                console.log(value);
            })
            //console.log(data);
        }).catch(function () {
            console.log("error");
        })
    }
    render() {
        return (
            <div className="Result">

            </div>
        );
    }
}

export default Result;
