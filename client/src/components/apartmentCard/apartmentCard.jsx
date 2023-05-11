import "./apartmentCard.css"
import { useState, useEffect } from 'react'

const ApartmentCard = (props) => {
    const SERVER = import.meta.env.RAILS_ENV.VITE_APP_SERVER

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
