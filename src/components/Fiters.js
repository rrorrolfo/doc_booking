import React, { Component } from "react";
import "../styles/filters.css"

class Filters extends Component {
    render () {
        return(
            <div className="Filters">
                <h1>Book Appointment</h1>

                <form>
                    
                    <div className="input_wrapper rounded">
                        <select>
                            <option>-- Select speciality --</option>
                            <option>Cardiology</option>
                            <option>Dermatology</option>
                            <option>Endocrinology</option>
                            <option>Geriatrics</option>
                            <option>Neurology</option>
                            <option>Oncology</option>
                            <option>Pediatrics</option>
                            <option>Plastic Surgery</option>
                            <option>Psychiatry</option>
                            <option>Urology</option>
                        </select>
                    </div>

                    <div className="input_wrapper rounded">
                    <input type="date" name="date" min="2019-03-30" max="2020-12-31"/>
                    </div>
                    

                    <div className="input_wrapper rounded">
                        <label>
                            <select>
                                <option>Tallinn</option>
                                <option>Tartu</option>
                                <option>Pärnu</option>
                            </select>
                        </label>
                    </div>

                    <button type="submit" className="submit rounded">Search</button>
                </form>

            </div>
        )
    }
}

export default Filters;
