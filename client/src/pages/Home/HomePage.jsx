import Searchbar from "../../components/searchbar/searchbar";
import "./homepage.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const onSelect = (e) => {
        console.log(e)
        navigate('/map?loc='+e); // redirect to new page
    }

    return  (<div className="homepage">
                <div className = "home_container">
                    <h1>The hardest way to rent an apartment in NYC!</h1>
                    <Searchbar onSelect={onSelect}></Searchbar>
                </div>
            </div>);
};

export default HomePage;
