import ApartmentCard from "../apartmentCard/apartmentCard";
import Searchbar from "../searchbar/searchbar";
import "./sidebar.css"

const SideBar = (props) => {
    let apartments = [1, 2, 3, 4, 5];
  console.log(props)
    return (<div className='sideBar'>
    <Searchbar setNta={props.setNta}>
    </Searchbar>
    <hr/>
    {props.locations.map(i => <ApartmentCard location={i} openModal={props.openModal} setSelected={props.setSelected}></ApartmentCard>)}
  </div>);
};

export default SideBar;
