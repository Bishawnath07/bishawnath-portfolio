import Lottie from 'lottie-react';
import developer from './developer.json'

const Banner = () => {
    return (
        <div className="bg-slate-600 md:flex gap-10 p-5 ">
            <div className='w-1/2 mt-8'>
                <h3 className="text-xl">HI THERE !</h3>
                <h2 className="text-3xl font-bold my-3">I M Bishawnath Ray</h2>
                <p>Im mern stack developer</p>
                <p className='font-semibold '> I am a <span className='text-cyan-400'>MERN Stack developer</span> with a passion for creating engaging and user-friendly websites. I have experience working with HTML, CSS and JavaScript and I specialize in creating responsive and visually appealing interfaces. </p>
                <div className='flex justify-start gap-5 my-5'>
                    <button className="btn btn-outline btn-success ">View Resume</button>
                    <button className="btn btn-outline btn-success ">Hired Me</button>
                </div>
            </div>
            <div className='md:w-1/2'>
                <Lottie animationData={developer}></Lottie>
            </div>
        </div>
    );
};

export default Banner;