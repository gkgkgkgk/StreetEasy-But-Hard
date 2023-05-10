import Searchbar from "../../components/searchbar/searchbar";
import "./homepage.css"

const HomePage = (props) => {
    return <div className="homepage"><div className = "home_container">
        <h1>The hardest way to rent an apartment in NYC!</h1>
        <Searchbar setNta={props.setNta}></Searchbar>
        </div>
    </div>;
};

export default HomePage;
