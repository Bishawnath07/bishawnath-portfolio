// import { Link } from "react-router-dom";
import image from './Bisshonath logo.jpg'
import { FaBars, FaFacebookF, FaGithub , FaLinkedin, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Slideber = ({ children }) => {
    // const menuItem = [
    //     {
    //         title: "Home",
    //         path: "/"
    //     },
    //     {
    //         title: "About",
    //         path: "/about"
    //     },
    //     {
    //         title: "Portfolio",
    //         path: "/portfolio"
    //     },
    //     {
    //         title: "Contact",
    //         path: "/contact"
    //     },
    // ]

    const [isOpen , setIsOpen] = useState(false);
    const toggle =()=>{setIsOpen(!isOpen)}

    return (
        <div className="container bg-slate-900 text-white">
            <div className="bars" onClick={toggle}>{isOpen ? <FaTimes></FaTimes> : <FaBars></FaBars> }</div>
            <div className="sidebar bg-slate-800" style={{display: isOpen ? "block" : ""}}>
                <div className="text-center  p-5">
                    <div className="avatar mx-16 md:pt-10">
                        <div className="w-28 rounded-full">
                            <img className="" src={image} />
                        </div>
                    </div>

                    <h1 className="logo text-2xl font-bold md:mt-5">  Bishawnath Ray</h1>
                    <p className="text-white font-semibold my-3">MERN STACK Developer</p>
                    <p className="text-white flex gap-4 justify-center"><FaFacebookF></FaFacebookF> <FaGithub></FaGithub> <FaLinkedin></FaLinkedin></p>
                </div>
                <div className="text-white p-3 md:p-5 font-semibold">
                    <p className="flex justify-between"><span>Residence :</span> <span>Bangladesh</span> </p>
                    <p className="flex justify-between"><span>City :</span> <span>Dhaka</span> </p>
                    <p className="flex justify-between"><span>Age :</span> <span>22</span> </p>
                    
                </div>

                <div className="menu">
                    <div>
                        {/* {
                            menuItem.map((item, index) => (
                                <Link
                                    to={item.path} key={index} className="link">
                                    <div className="link_title">{item.title}</div>
                                </Link>
                            ))
                        } */}
                        <ul className="">
                            <li className='link_title rounded-md'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='link_title my-4 rounded-md'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='link_title rounded-md'>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li className='link_title mt-4 rounded-md'>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Slideber;

