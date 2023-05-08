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
                <ul className='navul'>
                    <li className='navli'><Link to="/">Home</Link></li>
                    <li className='navli'><Link to="/map">See the Map</Link></li>
                    <li className='navli'><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;