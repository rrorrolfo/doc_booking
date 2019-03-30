import React from "react";
import "../../styles/availabledoctor.css";
import doc2 from "../../assets/doc2.jpeg";

const AvailableDoctor = () => {
    return(
        <div className="available_doctor">

            <div className="img_container">
                <img className="doc_img" src={ doc2 } alt="doc2"/>
            </div>

            <div className="doctor_data">
                <h3>M y name here</h3>
                <p>Location here</p>
                <p>Languague shere</p>
            </div>

            <div className="availability">
                <h3>Available times</h3>
                <p className="available_time">13:00</p>
                <p className="available_time">13:00</p>
                <p className="available_time">13:00</p>
                <p className="available_time">13:00</p>
            </div>

            <div>
                <button className="book">Book</button>
            </div>

        </div>
    )
}

export default AvailableDoctor;