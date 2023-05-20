import useTitle from "../../../../../hooks/useTitel";
import Gallery from "../../../Gallery/Gallery";
import Header from "../../../Header/Header";
import Partner from "../../../Partner/Partner";
import Team from "../../../Team/Team";
import ToyCategory from "../../../ToyCategory/ToyCategory";


const Home = () => {
    useTitle("Home");
    return (
        
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <Team></Team>
            <Partner></Partner>
        </div>
    );
};

export default Home;