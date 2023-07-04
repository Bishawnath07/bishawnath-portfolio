import About from "../../components/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects/Projects";
import Skilled from "../../components/Projects/Skilled";
import Footer from "../global/Footer";


const Home = () => {
    return (
        <div className='p-10'>
           <Banner></Banner>
           <About></About>
           <Skilled></Skilled>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;