import img1 from '../../assets/Images/html.png'
import img2 from '../../assets/Images/CSS.png'
import img3 from '../../assets/Images/bootstrap.png'
import img4 from '../../assets/Images/tailwind.png'
import img5 from '../../assets/Images/mui.png'
import img6 from '../../assets/Images/JS.png'
import img7 from '../../assets/Images/react.png'
import img8 from '../../assets/Images//jwt.png'
import img9 from '../../assets/Images/react_Query.png'
import img10 from '../../assets/Images/node-js.png'
import img11 from '../../assets/Images/express.png'
import img12 from '../../assets/Images/nextjs.png'
import img13 from '../../assets/Images/mongoDB.png'
import img14 from '../../assets/Images/firebase.png'
import img15 from '../../assets/Images/github.png'
import img16 from '../../assets/Images/figma.png'
import img17 from '../../assets/Images/netlify.png'
import img18 from '../../assets/Images/vercel.png'

const Skilled = () => {
    return (
        <div className="mt-24">
            <h2 className="text-4xl font-bold text-center">Skills</h2>
            <div>
                <p className='my-5 font-semibold text-center'>Programming language and technologies</p>
                <div>
            <div className='max-w-6xl md:mx-auto mx-10 my-10'>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 "  >
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="items-center mx-auto m-5 rounded ">
                    <img  src={img1} />
                </div>
                    <p>HTML</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img2} />
                </div>
                <p>CSS</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img3} />
                </div>
                <p className='mb-0'>Boostrup</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img4} />
                </div>
                <p>Tailwind</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img5} />
                </div>
                <p>Material UI</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img6} />
                </div>
                <p>Javascript</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img7} />
                </div>
                React
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img8} />
                </div>
                <p>JWT</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img9} />
                </div>
                <p>Tanstack Qquery</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img10} />
                </div>
                <p>Node </p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img11} />
                    <p>Express.js</p>
                </div>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img12} />
                </div>
                Next.js
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img13} />
                </div>
                <p>MongoDb</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img14} />
                </div>
                <p>firebase</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img15} />
                </div>
                <p>Github</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img16} />
                </div>
                <p>Figma</p>
            </div>
            <div className="border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img17} />
                </div>
                <p>netlify</p>
            </div>
            <div className=" border-2 rounded-md border-lime-200 text-center">
                <div className="rounded items-center mx-auto m-5 ">
                    <img src={img18} />
                </div>
                <p>vercel</p>
            </div>
        </div>
        </div>
        <hr />
        </div>
            </div>
        </div>
    );
};

export default Skilled;