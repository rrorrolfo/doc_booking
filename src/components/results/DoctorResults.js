import React from "react";
import AvailableDoctor from "./AvailableDoctor";
import "../../styles/doctorResults.css";

const DoctorResults = () => {
    return(
        <div className="DoctorResults">
            <AvailableDoctor />
            <AvailableDoctor />
        </div>
    )
}

export default DoctorResults;