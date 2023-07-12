import Footer from '../global/Footer';
import { FaArrowRight } from 'react-icons/fa';
import img from './toys-shop.web.app_.png'
import img2 from './chif recipe.png'
import img1 from './art spire academi.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        
               <>
                <div className="md:p-10">
                    <h3 className="my-10 text-3xl font-bold">Recent Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='h-[235px] w-[' src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">Art Spires Academy</h2>
                        <div className="card-actions justify-start">
                            <Link to="/ProjectDetailsOne"><button className="btn btn-sm btn-success btn-outline">View Details <FaArrowRight></FaArrowRight></button></Link>
                            <a href="https://art-spires-academy.web.app/" target='blank'>
                                <button className="btn btn-sm btn-success btn-outline">Live Demo</button>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">Online Toys Shop</h2>
                        <div className="card-actions justify-start">
                            <Link to='/ProjectDetailsSecond'><button className="btn btn-sm btn-success btn-outline">View Details <FaArrowRight></FaArrowRight></button></Link>
                            <a href="https://toys-shop-7b335.web.app/" target='blank'>
                                <button className="btn btn-sm btn-success btn-outline">Live Demo</button>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img className='h-[235px] w-[' src={img2} alt="Shoes" /></figure>
                    <div className="card-body text-black">
                        <h2 className="card-title">Chefs Cuisine</h2>
                        <div className="card-actions justify-start">
                        <Link to='/ProjectDetailsThird'><button className="btn btn-sm btn-success btn-outline">View Details <FaArrowRight></FaArrowRight></button></Link>
                            <a href="https://fastest-food-service.web.app/" target='blank'>
                                <button className="btn btn-sm btn-success btn-outline">Live Demo</button>
                                </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
                </div>
               <div className='mt-36'>
               <Footer></Footer>
               </div>
               </>
            );
        
      
};

export default Portfolio;