import ApartmentCard from "../apartmentCard/apartmentCard";
import Searchbar from "../searchbar/searchbar";
import "./sidebar.css"

const SideBar = (props) => {
    return (<div className='sideBar'>
    <Searchbar setNta={props.setNta}>
    </Searchbar>
    <hr/>
    {props.locations.slice(0, 50).map(i => { return (<ApartmentCard location={i} openModal={props.openModal} setSelected={props.setSelected}></ApartmentCard>)})}
  </div>);
};

export default SideBar;
