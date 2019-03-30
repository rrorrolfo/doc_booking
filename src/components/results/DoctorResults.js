import React from "react";
import AvailableDoctor from "./AvailableDoctor";
import "../../styles/doctorResults.css";

const DoctorResults = props => {

    const displayResults = () => {

        const returnedResults = props.results
        console.log(returnedResults, 1)

        const finalResults = returnedResults.map( (doctor, index) => <AvailableDoctor name={doctor.name} location={ doctor.location} languages={ doctor.languages} times={ doctor.available_times} image={ doctor.img} key={ index + 1}/>)

        return finalResults
    }

    return(
        <div className="DoctorResults">

            {props.emptyResults ? ("") : (displayResults())}
            
            
        </div>
    )

}

export default DoctorResults;