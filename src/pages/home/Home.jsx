import About from "../../components/About";
import Banner from "../../components/Banner/Banner";


const Home = () => {
    return (
        <div className='p-10'>
           <Banner></Banner>
           <About></About>
           {/* <Projects></Projects> */}
        </div>
    );
};

export default Home;