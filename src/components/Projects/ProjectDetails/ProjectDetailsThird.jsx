import { HiArrowLeft, HiArrowSmallRight } from "react-icons/hi2";
import Footer from "../../../pages/global/Footer";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";
import image from './Images/third/Screenshot (198).png';
import image1 from './Images/third/fastest-food-service.web.app_ (1).png';
import image2 from './Images/third/fastest-food-service.web.app_ (2).png';
import image3 from './Images/third/fastest-food-service.web.app_ (3).png';
import image4 from './Images/third/fastest-food-service.web.app_ (4).png';
import image5 from './Images/third/fastest-food-service.web.app_ (5).png';

const ProjectDetailsThird = () => {
    return (
        <>
            <div className="p-10">
                <div className="flex ">
                    <Link to="/"><button className="text-xl font-semibold  mb-5"><HiArrowLeft className="btn-circle btn btn-sm"></HiArrowLeft></button></Link>
                    <p className="text-xl font-semibold ml-5">Projects Details</p>
                </div>
                <div className=" md:flex justify-between gap-10">
                    <div className="md:w-1/2">
                        <Carousel autoPlay infiniteLoop className='text-center '>
                            <div>
                                <img src={image} alt="Image 1" />
                                <p className="legend">Image 1</p>
                            </div>
                            <div>
                                <img src={image1} alt="Image 1" />
                                <p className="legend">Image 1</p>
                            </div>
                            <div>
                                <img src={image2} alt="Image 2" />
                                <p className="legend">Image 2</p>
                            </div>
                            <div>
                                <img src={image3} alt="Image 3" />
                                <p className="legend">Image 3</p>
                            </div>
                            <div>
                                <img src={image4} alt="Image 3" />
                                <p className="legend">Image 3</p>
                            </div>
                            <div>
                                <img src={image5} alt="Image 3" />
                                <p className="legend">Image 3</p>
                            </div>

                        </Carousel>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold">Chefs Cuisine</h2>
                        <p className="font-semibold my-5">A fully functional, full-stack website based on MERN .There are top 6 chifs and his Supper recipe . User can mark add recipe his favorite chifs . </p>
                        <div className="flex gap-5">
                            <a href="https://fastest-food-service.web.app/" target='blank'>
                                <button className="btn btn-sm btn-success btn-outline">Live Demo</button>
                            </a>
                            <a href="https://github.com/Bishawnath07/chef-recipe-hunter-client-side" target='blank'>
                                <button className="btn btn-sm btn-success btn-outline">Client Code</button>
                            </a>
                            <a href="https://github.com/Bishawnath07/chef-recipe-hunter-server-side" target='blank'>
                                <button className="btn btn-sm btn-success btn-outline">Server Code</button>
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold my-5">Technology</h2>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="btn  btn-sm btn-neutral">JavaScript</button>
                                <button className="btn  btn-sm btn-neutral">React.js</button>
                                <button className="btn  btn-sm btn-neutral">Node.js</button>
                                <button className="btn  btn-sm btn-neutral">Express js</button>
                                <button className="btn  btn-sm btn-neutral">Firebase</button>
                                <button className="btn  btn-sm btn-neutral">MongoDB</button></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold my-4">Features</h2>
                    <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4"> Created the route by creating api data in the json file on the server site.</span></p>
                    <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">The data is loaded on the client site and displayed in the home page.</span></p>
                    <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">Home page navbar, 6 chiefs are shown in card form with their details, 2 extra sections are created.</span></p>
                    <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">I have given a button called View Recipe in each of the chiefs. Where clicked will take you to the view recipe page.</span></p>
                    <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">Then all the details of each chief according to their ID are shown on that page.</span></p>
                    <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">Authentication to create user with Gmail password is shown. The user login page has been created again. User login authentication is done with it.</span></p>
                    <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">The view recipe page is placed inside the private route</span></p>
                    
                </div>
            </div>
            <hr />
            <Footer></Footer>
        </>
    );
};

export default ProjectDetailsThird;