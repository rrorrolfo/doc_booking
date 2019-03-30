import React from "react";
import flag from "../assets/british_flag.png";
import "../styles/header.css"

const Header = () => {
    return(
        <header className="Header">
            <div className="language">
                <img src={flag} alt="language selection"/>
            </div>
        </header>
    )
}

export default Header;