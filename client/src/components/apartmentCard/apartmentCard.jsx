import "./apartmentCard.css"

const ApartmentCard = (props) => {
    const openModal = () => {
        props.openModal(true)
        props.setSelected(props.location)
    }

    return (
    <div className="apartmentCard" onClick={openModal}>
        <img src="https://thumbs.cityrealty.com/assets/smart/736x/webp/1/16/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88/1-city-point.jpg"></img>
        <h2>{props.location.address}</h2>
    </div>);
};

export default ApartmentCard;
