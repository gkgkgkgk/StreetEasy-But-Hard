import "./apartmentCard.css"
import { useState, useEffect } from 'react'

const ApartmentCard = (props) => {
    const SERVER = "http://localhost:5000"

    const openModal = () => {
        props.openModal(true)
        props.setSelected(props.location)
    }

    const [image, setImage] = useState(null);

    return (
    <div className="apartmentCard" onClick={openModal}>
        <img src={SERVER + "/images/" + props.location.lat +"_"+props.location.long + ".jpeg"}></img>
        <h2>{props.location.address}</h2>
    </div>);
};

export default ApartmentCard;
