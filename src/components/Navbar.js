import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


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
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">SignIn</NavLink>
                </li>
                <li> 
                    <NavLink to="/signup">SignUp</NavLink>
                </li>
            </ul>
        </nav>
    ); 
};



