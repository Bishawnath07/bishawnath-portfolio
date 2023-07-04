import img from './Bisshonath passport size Photo FHD .jpg'
import {   HiLocationMarker , HiPhone ,HiMail } from "react-icons/hi";


const About = () => {
    return (
        <div className="mt-10 p-10">
        <h1 className="text-4xl font-bold mb-5">Get to know me</h1>
        <div className='md:flex gap-8'>
           
            <div className='md:w-2/3'>
                <h3 className='text-red-500 text-2xl '>Who I am ?</h3>
                <h3 className='text-3xl font-semibold my-4'>Im Bishawnath Ray , a MERN STACK Developer</h3>
                <p className='font-semibold mb-4'>My name is Bishwanath Roy. I am currently studying Computer Science and Engineering at Dinajpur Polytechnic Institute. I am a front-end developer with a passion for creating engaging and user-friendly websites. I have experience working with HTML, CSS and JavaScript and I specialize in creating responsive and visually appealing interfaces. In my previous role, I had the opportunity to collaborate with a talented team of designers and back-end developers. I am always excited to stay up-to-date with the latest web development trends and technologies, as this allows me to constantly improve my skills. I am thrilled to be here today and look forward to connecting with all of you. Feel free to reach out if you have any questions or want to chat about front-end development. Let's make the web a more user-friendly place together!.</p>
                <hr />
               
                
            </div>
            <div className='w-full md:w-1/3'>
                <img  className="rounded-md md:mb-16" src={img} alt="" />
            </div>
        </div>

        <div className=' '>
                        <h3 className='text-4xl font-bold'>Get in touch</h3>
                        <p>Fill in the form to start a conversation</p>
                        <p className='flex my-5'>
                            <HiLocationMarker></HiLocationMarker>
                            <span className='-mt-1 ml-3'>Dinajpur , Bangladeshh</span></p>
                        <p className='flex mb-5'><HiPhone></HiPhone> <span className='-mt-1 ml-3'>+8801794078531</span> </p>
                        <p className='flex'><HiMail></HiMail> <span className='-mt-1 ml-3'>bishawnathray401932@gmail.com</span></p>
                    </div>
    </div>
    );
};

export default About;