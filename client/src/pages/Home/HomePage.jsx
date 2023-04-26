import Searchbar from "../../components/searchbar/searchbar";
import "./homepage.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const onSelect = (e) => {
        console.log(e)
        navigate('/listing?loc='+e); // redirect to new page
    }

    return <div className="homepage"><h1>Find Your New Apartment Here!</h1><Searchbar onSelect={onSelect}></Searchbar></div>;
};

export default HomePage;
