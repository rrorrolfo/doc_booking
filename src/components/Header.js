import React from "react";
import flag from "../assets/british_flag.png";
import "../styles/header.css"

const Header = () => {
    return(
        <header className="Header">
                <img src={flag} className="logo" alt="language selection"/>
                <img src={flag} className="language" alt="language selection"/>
        </header>
    )
}

export default Header;