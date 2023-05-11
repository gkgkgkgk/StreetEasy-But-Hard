import React from 'react';
import "./largeCard.css"
import CloseIcon from '@mui/icons-material/Close';

const LargeCard = (props) => {
    let SERVER = import.meta.env.VITE_APP_SERVER
    return (
        props.opened ?
        (<div className='largeCardContainer' onClick={() => props.closeModal()}><div className='largeCard'>
            <div className='largeCardHeader'>
            <h1>{props.location.address}</h1>
            <CloseIcon className='closeButton' onClick={() => props.closeModal()}></CloseIcon>
            </div>
            <img src={SERVER + "/images/" + props.location.lat +"_"+props.location.long + ".jpeg"}></img>
            <p style={{fontWeight: '700', marginBottom: "0px"}}>Notes from HRI: </p>
            <p style={{marginTop: "0px"}}>{props.location.Notes}</p>
            <p style={{textAlign:'center', fontWeight: '700', color:"red", fontSize:"30px"}}>You likely can't use a voucher here...</p>
        </div></div>) : <></>
    );
}

export default LargeCard;