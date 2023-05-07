import ApartmentCard from "../apartmentCard/apartmentCard";
import Searchbar from "../searchbar/searchbar";
import "./sidebar.css"

const SideBar = () => {
    let apartments = [1, 2, 3, 4, 5];

    return (<div className='sideBar'>
    <Searchbar>
    </Searchbar>
    <hr/>
    {apartments.map(i => <ApartmentCard></ApartmentCard>)}
  </div>);
};

export default SideBar;
