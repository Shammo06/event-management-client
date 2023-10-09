import About from "../About/About";
import OurStory from "../OurStory/OurStory";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurStory></OurStory>
        </div>
    );
};

export default Home;