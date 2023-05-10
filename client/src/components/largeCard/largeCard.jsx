import React from 'react';
import "./largeCard.css"
import CloseIcon from '@mui/icons-material/Close';

const LargeCard = (props) => {
    return (
        props.opened ?
        (<div className='largeCard'>
            <div className='largeCardHeader'>
            <h1>Title Goes Here</h1>
            <CloseIcon className='closeButton' onClick={() => props.closeModal()}></CloseIcon>
            </div>
            <img src="https://thumbs.cityrealty.com/assets/smart/736x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg"></img>
            <p>Information goes here.</p>
        </div>) : <></>
    );
}

export default LargeCard;