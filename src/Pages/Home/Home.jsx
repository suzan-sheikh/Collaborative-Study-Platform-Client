import Banner from "./Banner/Banner";
import Session from "./Session/Session";
import AllTutor from "./TuterSection/AllTutor";

const Home = () => {
    return (
        <div className="mt-16">
            <Banner/>
            <Session/>
            <AllTutor/>
        </div>
    );
};

export default Home;