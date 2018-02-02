import React, { Component } from 'react';
import '../style/modules/App.css';
import {browserHistory} from 'react-router';

class Result extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
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
    handleSubmit(e){
        e.preventDefault();
         browserHistory.push('/reservationConfirmation');
       }
    render() {
        return (
                <div className="list-row">
                        <div className="location-pic">
                            <img src={require('../assets/locationpic.jpg')}/>
                        </div>
                        <div className="list-location-info">
                            <h4>Residential Yemlur Parking Lot</h4>
                            <span>Distance: 0.4kms</span>
                            <p>20 Rs/Hour</p>
                            <input type="button" value="Book Now" onClick={this.handleSubmit}/>
                        </div>
                    </div>
        );
    }
}

export default Result;

