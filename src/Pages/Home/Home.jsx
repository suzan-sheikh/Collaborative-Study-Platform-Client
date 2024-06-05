import Banner from "./Banner/Banner";
import Session from "./Session/Session";
import Tutor from "./Tutor/Tutor";

const Home = () => {
    return (
        <div className="mt-16">
            <Banner/>
            <Session/>
            <Tutor/>
        </div>
    );
};

export default Home;