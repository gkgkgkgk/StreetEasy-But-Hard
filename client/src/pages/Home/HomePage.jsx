import Searchbar from "../../components/searchbar/searchbar";
import "./homepage.css"

const HomePage = () => {
    const onSelect = (e) => {
        console.log(e)
    }

    return <div className="homepage"><h1>Find Your New Apartment Here!</h1><Searchbar onSelect={onSelect}></Searchbar></div>;
};

export default HomePage;
