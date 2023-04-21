import React from 'react';
import './header.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <div className='fixed-header'>
            <div>
                <h3>StreetEasy...ButHard</h3>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/map">See the Map</Link></li>
                    <li><Link to="/listing">Search a Listing</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;