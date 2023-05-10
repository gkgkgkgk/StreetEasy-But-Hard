import ApartmentCard from "../apartmentCard/apartmentCard";
import Searchbar from "../searchbar/searchbar";
import "./sidebar.css"

const SideBar = (props) => {
    let apartments = [1, 2, 3, 4, 5];

    return (<div className='sideBar'>
    <Searchbar setNta={props.setNta}>
    </Searchbar>
    <hr/>
    {apartments.map(i => <ApartmentCard openModal={props.openModal}></ApartmentCard>)}
  </div>);
};

export default SideBar;
