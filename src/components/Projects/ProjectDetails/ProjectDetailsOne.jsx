import { Link } from "react-router-dom";
import Footer from "../../../pages/global/Footer";
import AutoImageSlider from "./AutoImageSlider";
import {  HiArrowLeft, HiArrowSmallRight } from "react-icons/hi2";

const ProjectDetailsOne = () => {

    return (
        <>
         <div className="p-8">
                <div className="flex ">
                <Link to="/"><button className="text-xl font-semibold  mb-5"><HiArrowLeft className="btn-circle btn btn-sm"></HiArrowLeft></button></Link>
                <p className="text-xl font-semibold ml-5">Projects Details</p>
                </div>
         <div className=" flex justify-between gap-10">
       
          
                <div className="w-1/2">
                    <AutoImageSlider />
                </div>
                <div className="w-1/2">
                    <h2 className="text-3xl font-semibold">Art Spires Academy</h2>
                    <p className="font-semibold my-5">A fully functional, full-stack website based on MERN .There are 3 different dashboards, student, instructor, admin dashboard and backend is used as a database with Fire authentication.</p>
                    <div className="flex gap-5">
                        <a href="https://art-spires-academy.web.app/" target='blank'>
                            <button className="btn btn-sm btn-success btn-outline">Live Demo</button>
                        </a>
                        <a href="https://github.com/Bishawnath07/art-spires-academy" target='blank'>
                            <button className="btn btn-sm btn-success btn-outline">Client Code</button>
                        </a>
                        <a href="https://github.com/Bishawnath07/art-spires-academy-server" target='blank'>
                            <button className="btn btn-sm btn-success btn-outline">Server Code</button>
                        </a>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-5">Technology</h2>
                        <div className="grid md:grid-cols-3 gap-4">
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
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">The home page features a React Slider and a Popular Classes section, where students are based on .</span></p>
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">The latest blog is shown using react-awesome-reveal, where the pictures are zoomed .</span></p>
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">Instructor page shows all the instructors from the database.</span></p>
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">The classes page shows the classes that have been added by the instructor, and the student can enroll if they want. However, the enroll button will be disabled for admin and instructor .</span></p>
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">Students can pay for enrolled classes and view payment history on the Student Dashboard.</span></p>
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">Instructors can add classes to the Instructor Dashboard, and see which classes admins are approving or cencle, and get class feedback.</span></p>
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">In the admin dashboard, the admin can make the student an instructor or admin and can add the instructors class, delete or approve it if desired and send feedback.</span></p>
                <p className="flex mb-4"><HiArrowSmallRight className="text-4xl "></HiArrowSmallRight><span className="ml-4">Dark mode or Sun toggled on the navbar.</span></p>
            </div>
         </div>
         <hr />
            <Footer></Footer>
        </>
    );
};

export default ProjectDetailsOne;