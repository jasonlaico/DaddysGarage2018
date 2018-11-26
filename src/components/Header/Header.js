// About Us 
// Tools For Rent
// FAQ
// Safety
// Marketplace
// List Tool For Rent

import React from "react";
import {Link} from "react-router-dom";
import './Header.css';
// import garage from "./garage.jpg"
export default function (props) {
    return (
        <div className="headerinhead">
            {/* <img className="headerimg" src="http://www.intheblack.com/~/media/intheblack/allimages/ethics/2015/ethics-toolkit.jpg" alt="toolbox"/> */}
       {/* <img className="headerimg" src={garage} alt="toolbox"/> */}

            <h1 className="Headertitle">Daddy's Garage</h1>
            <Link className="headLink1" to="/">Home</Link>
            <Link className="headLink2" to="/AboutUs"> About Us</Link>
            <Link className="headLink3" to="/ToolsForRent"> Tools For Rent</Link>
            <Link className="headLink4" to="/FAQ"> FAQ</Link>
            <Link className="headLink5" to="/Safety"> Safety</Link>
            <Link className="headLink6" to="/Marketplace"> Marketplace</Link>
            <Link className="headLink7" to="/ListTool"> List Tool for Rent</Link>
            <Link className="headLink8" to="/Contact"> Contact Us</Link>

        </div>
    )
}

