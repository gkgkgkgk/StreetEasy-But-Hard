import React from 'react';
import "./largeCard.css"
import CloseIcon from '@mui/icons-material/Close';

const LargeCard = (props) => {
    let SERVER = import.meta.env.VITE_APP_SERVER
    console.log(props.location)
    return (
        props.opened ?
        (<div className='largeCardContainer' onClick={() => props.closeModal()}><div className='largeCard'>
            <div className='largeCardHeader'>
            <h1>{props.location.address}</h1>
            <CloseIcon className='closeButton' onClick={() => props.closeModal()}></CloseIcon>
            </div>
            <img src={SERVER + "/images/" + props.location.lat +"_"+props.location.long + ".jpeg"}></img>
            <p>{props.location.Notes}</p>
            <p style={{fontWeight: '700'}}>Status: {props.location.status}</p>
        </div></div>) : <></>
    );
}

export default LargeCard;