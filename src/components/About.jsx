import img from './Bisshonath passport size Photo FHD .jpg'

const About = () => {
    return (
        <div className="mt-10 ">
            <h1 className="text-4xl font-bold ">About Me</h1>
            <p className='my-5'>Get to know me</p>
            <div className='md:flex gap-8'>
               
                <div className='md:w-2/3'>
                    <h3 className='text-red-500 text-2xl '>Who I am ?</h3>
                    <h3 className='text-3xl font-semibold my-4'>Im Bishawnath Ray , a MERN STACK Developer</h3>
                    <p className='font-semibold mb-4'> I am a MERN STACK developer with a passion for creating engaging and user-friendly websites. I have experience working with HTML, CSS and JavaScript , React js , TypeScript , Node js , express js ,  and I specialize in creating responsive and visually appealing interfaces.</p>
                    <hr />
                    <div className='bg-gray-400 p-5 mt-5 text-black font-semibold rounded-md'>
                        <p className='flex justify-between mb-6'><span>Name: Bishawnath Ray</span> <span>Email: bishawnathray401932@gmail.com</span></p>
                        <p className='flex justify-between'><span>Age: 22</span><span>From: Dinajpur , Bangladesh</span></p>
                        
                    </div>
                    
                </div>
                <div className='w-full md:w-1/3'>
                    <img  className="rounded-md md:mt-10" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;