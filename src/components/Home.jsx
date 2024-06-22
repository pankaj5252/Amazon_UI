// Home.jsx

import BgSlider from "./BgSlider";
import Slider from "./Slider";
import HomeCard from "./common/HomeCard";
import Homead1 from "./common/Homead1";
import SliderDivide from "./common/SliderDivide";
import SliderDivide2 from "./common/SliderDivide2";

const Home = () => {
    return (
        <>
            <BgSlider/>
            <HomeCard/>
            <Slider/>
            <Homead1/>
            <SliderDivide/>
            <HomeCard/>
            <SliderDivide2/>

        </>
    );
};

export default Home;
