import React from "react";
import "../styles/nav.css";

const Nav = () => {
    return(
        <nav className="Nav">
            <h2>Menu</h2>
            <ul>
                <li>
                    <svg className="nav_svg" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><g id="Grid"/><g id="Meter"/><g id="Email"/><g id="Email_Notification"/><g id="Inbox"/><g id="Inbox_Notification"/><g id="List"/><g id="Grid_1_"/><g id="Add"><g><circle cx="16" cy="16" fill="none" r="14" stroke="#000000" stroke-miterlimit="10"/><g><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="16" x2="16" y1="7.6" y2="24.4"/><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="24.4" x2="7.6" y1="16" y2="16"/></g></g></g><g id="Minus"/><g id="Basket"/></g>
                    </svg>
                    Book Appointments
                </li>
                <li>
                    <svg  className="nav_svg" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><g id="Guide"/><g id="Basket_Add"/><g id="Schedule"><path d="M28.2,26.1H3.8c-0.6,0-1-0.4-1-1V10c0-0.6,0.4-1,1-1h24.3     c0.6,0,1,0.4,1,1v15.1C29.2,25.6,28.7,26.1,28.2,26.1z" fill="none" stroke="#000000" stroke-miterlimit="10"/><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2.8" x2="29.2" y1="14" y2="14"/><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2.8" x2="29.2" y1="18.3" y2="18.3"/><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2.8" x2="29.2" y1="22.2" y2="22.2"/><path d="M6.6,5.9" fill="none" stroke="#000000" stroke-miterlimit="10"/><path d="M8,10.9H7.8c-0.2,0-0.4-0.2-0.4-0.4V7.4C7.4,7.2,7.6,7,7.8,7H8c0.2,0,0.4,0.2,0.4,0.4v3.2C8.4,10.8,8.2,10.9,8,10.9z"/><path d="M24.2,10.9H24c-0.2,0-0.4-0.2-0.4-0.4V7.4C23.6,7.2,23.8,7,24,7h0.2c0.2,0,0.4,0.2,0.4,0.4v3.2     C24.6,10.8,24.4,10.9,24.2,10.9z"/><g><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="9.2" x2="9.2" y1="14" y2="26.1"/><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="16" x2="16" y1="14" y2="26.1"/><line fill="none" stroke="#000000" stroke-miterlimit="10" x1="22.8" x2="22.8" y1="13.9" y2="26"/></g></g><g id="Clipboard"/><g id="Align_Left"/><g id="Align_Right"/><g id="Align_Center_1_"/><g id="Justify"/><g id="Document"/><g id="New_Document"/><g id="Cart"/></g></svg>
                    My Appointments</li>
                <li>
                <svg className="nav_svg" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32"><g><g id="Guide"/><g id="Notification"/><g id="New_Notification"/><g id="Statistic"/><g id="Favorite"/><g id="Checkbox"/><g id="Writing"/><g id="Italic"/><g id="Underline"/><g id="Setting"><g><circle cx="16" cy="16.6" fill="none" r="2.8" stroke="#1D1D1B" stroke-miterlimit="10"/><path d="M26.1,17.9v-2.5l-3.1-0.9c-0.1-0.4-0.3-0.8-0.5-1.2l1.6-2.9      l-1.8-1.8l-2.9,1.6C19,10,18.6,9.9,18.2,9.7l-0.9-3.1h-2.5l-0.9,3.1c-0.4,0.1-0.8,0.3-1.2,0.5L9.8,8.6L8,10.4l1.6,2.9      c-0.2,0.4-0.4,0.8-0.5,1.2L6,15.4v2.5l3.1,0.9c0.1,0.4,0.3,0.8,0.5,1.2L8,22.8l1.8,1.8l2.8-1.6c0.4,0.2,0.8,0.4,1.2,0.5l0.9,3.1      h2.5l0.9-3.1c0.4-0.1,0.8-0.3,1.2-0.5l2.8,1.6l1.8-1.8L22.4,20c0.2-0.4,0.4-0.8,0.5-1.2L26.1,17.9z" fill="none" stroke="#1D1D1B" stroke-miterlimit="10"/></g></g><g id="Power"/></g></svg>
                Settings</li>
            </ul>
        </nav>
    )
}

export default Nav;