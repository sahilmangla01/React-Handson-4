import React from "react";
import {  NavLink } from "react-router-dom";
import "./LinkCompo.css"


function LinkCompo(){
    return(
        <div className="links">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/student">Student</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
            
        </div>
    )
}

export default LinkCompo