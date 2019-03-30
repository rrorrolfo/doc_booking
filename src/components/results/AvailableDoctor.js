import React from "react";
import "../../styles/availabledoctor.css";


const AvailableDoctor = ({name, location, languages, times, image}) => {

    const doc2 = require("../../assets/doc2.jpeg");

    return(
        <div className="available_doctor">

            <div className="img_container">
                <img className="doc_img" src={ doc2 } alt={ image }/>
            </div>

            <div className="doctor_data">
                <h3>{ name }</h3>
                <p>{ location }</p>
                <p>{ languages }</p>
            </div>

            <div className="availability">
                <h3>Available times</h3>
                {times}
            </div>

            <div>
                <button className="book">Book</button>
            </div>

        </div>
    )
}

export default AvailableDoctor;