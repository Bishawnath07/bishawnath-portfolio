import img from './Bisshonath passport size Photo FHD .jpg'

const About = () => {
    return (
        <div className="mt-10 p-5  md:p-0">
            <h1 className="text-4xl font-bold ">About Me</h1>
            <p className='my-5'>Get to know me</p>
            <div className='md:flex gap-8'>
               
                <div className='md:w-2/3'>
                    <h3 className='text-red-500 text-2xl '>Who I am ?</h3>
                    <h3 className='text-3xl font-semibold my-4'>Im Bishawnath Ray , a MERN STACK Developer</h3>
                    <p className='font-semibold mb-4'> I am a MERN STACK developer with a passion for creating engaging and user-friendly websites. I have experience working with HTML, CSS and JavaScript , React js , TypeScript , Node js , express js ,  and I specialize in creating responsive and visually appealing interfaces.</p>
                    <hr />
                    <div className='bg-gray-400 p-5 mt-5 mb-5 md:mb-0 text-black font-semibold rounded-md'>
                        <div className='md:flex justify-between md:mb-6'>
                            <p>Name: Bishawnath Ray</p>
                         <p>Email: bishawnathray401932@gmail.com</p></div>
                        <div className='md:flex justify-between'><p>Age: 22</p><p>From: Dinajpur , Bangladesh</p></div>
                        
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