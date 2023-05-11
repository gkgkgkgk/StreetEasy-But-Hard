import React from 'react';
import './header.css';
import { Outlet, Link } from "react-router-dom";

function Header(props) {
    return (
        <div className='fixed-header'>
            <div style={{height:"100%", width: "200px", marginTop: "10px"}}>
                <img style={{filter: "invert(100%)"}} src="https://raw.githubusercontent.com/gkgkgkgk/StreetEasy-But-Hard/main/client/streethard.svg" alt="test"></img>
            </div>
            <div>
                <ul className='navul'>
                    <li className='navli'><Link to="/">Home</Link></li>
                    <li className='navli' onClick={()=>props.setNta("")}><Link to="/map">See the Map</Link></li>
                    <li className='navli'><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;