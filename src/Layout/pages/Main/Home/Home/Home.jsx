import Chart from "../../../Chart/Chart";
import Gallery from "../../../Gallery/Gallery";
import Header from "../../../Header/Header";
import ToyCategory from "../../../ToyCategory/ToyCategory";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Gallery></Gallery>
            <ToyCategory></ToyCategory>
            <Chart></Chart>
        </div>
    );
};

export default Home;