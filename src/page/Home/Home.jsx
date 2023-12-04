import Banner from "../../companent/Banner/Banner";
import Candidates from "../../companent/Candidates/Candidates";
import Catagoreis from "../../companent/Catagoreis/Catagoreis";
import {Helmet} from "react-helmet";
import Contack from "../../companent/Contack/Contack";
import Compani from "../../companent/Compani/Compani";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Career Pulse | Home</title>
            </Helmet>
            <Banner/>
            <div className="w-11/12 mx-auto">
                <Catagoreis/>
            </div>
            <Contack/>
            <Candidates/>
            <Compani/>
            

        </div>
    );
};

export default Home;