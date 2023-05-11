import React from 'react'
import {useState} from 'react'
import './MapPage.css'

function Info(props) {
    const [showMore, setShowMore] = useState(false);
    
    return (
        <div className='infoWindow'>
            <h1  style={{ color: 'black ' }}>{props.element.address.toUpperCase()}</h1>
            <h2  style={{ color: 'red ' }}>You likely can't use a voucher here...</h2>
            <h3  style={{ color: 'black', justifyContent: 'center'}}>Notes from HRI:</h3>
            <p style={{color: 'black'}}>
                {showMore || props.element.Notes.split(" ").length < 25? props.element.Notes : `${props.element.Notes.split(" ", 25).join(' ') + "..."}`}
            </p>
            <div className='cont'>
                {props.element.Notes.split(" ").length > 25 ?
                <button className="morebtn" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
                : null
                }
            </div>
        </div>
    )
}

export default Info;
