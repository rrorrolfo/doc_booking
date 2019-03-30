import React, { Component } from "react";
import "../styles/success.css";

class Success extends Component {

    componentDidMount() {
        this.props.noDefault()
    }

    render() {
        return(
            <div className="Success">
                <h1>Appointment Booked!</h1>
                <div>
                </div>
            </div>
            )
    }
    
    
}

export default Success;