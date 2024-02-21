import React, { useState }from "react";
import { NavLink } from "react-router-dom";


import  "./Navbar.css"
export const Navbar = () => {
    const [menuOpen, setMenuOpen]=useState(false)
    return (
        <nav>
            <NavLink to="/" className="title"> Telecom Billing Dasboard</NavLink>
            <div className="menu"
            onClick={() => {
                setMenuOpen(!menuOpen);
            }}></div>
            <span></span>
            <span></span>
            <span></span>
       <ul className={menuOpen ?  "open" : ""}>
                <li>
                    <NavLink to="/about">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services">SignIn</NavLink>
                </li>
                <li> 
                    <NavLink to="/contact">SignUp</NavLink>
                </li>
            </ul>
        </nav>
    ); 
};



