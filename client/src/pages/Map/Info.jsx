import React from 'react'
import {useState} from 'react'
import './MapPage.css'

function Info(props) {
    const [showMore, setShowMore] = useState(false);
    
    return (
        <div className='infoWindow'>
            <h1  style={{ color: 'black ' }}>{props.element.address.toUpperCase()}</h1>
            <h2  style={{ color: 'red ' }}>You likely can't use a voucher here...</h2>
            {/* <p  style={{ color: 'black ' }}>{props.element.Notes}</p> */}
            <p style={{color: 'black'}}>
                {showMore ? props.element.Notes : `${props.element.Notes.substring(0, 100)}`}
            </p>
            {props.element.Notes.length >= 100 ?
                
                <button className="moreBtn" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
                : null
            }
        </div>
    )
}

export default Info;
