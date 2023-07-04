import  { useState, useRef } from 'react';
import developer from '../components/Banner/developer.json'
import Lottie from 'lottie-react';
import { HiArrowRight , HiLocationMarker , HiPhone ,HiMail } from "react-icons/hi";

const Contact = () => {
    const [username, setUsername] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    // const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    // const [errMsg, setErrMsg] = useState("")
    // const [successMsg, setSuccessMsg] = useState("")

    const form = useRef();

    // ========== Email Validation start here ==============
    // const emailValidation = () => {
    //     return String(email)
    //         .toLocaleLowerCase()
    //         .match(/^\w+([-]?\w+)*@\w+([-]?\w+)/);
    // };
    // ========== Email Validation end here ================

    // const handleSend = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'service_mllxfw9',
    //         'template_nb28dfa',
    //         form.current, 'H2HvfX0k2XB-eJVCL')
    //         .then((result) => {
    //             console.log(result.text);
    //             console.log("message sent");
    //         }, (error) => {
    //             console.log(error.text);
    //         });

    //     if (username === "") {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Username is required!',
    //             text: 'Please provide your username!',
    //         })
    //         setSuccessMsg("")
    //     } else if (phoneNumber === "") {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Phone number is required!',
    //             text: 'Please provide your phone number!',
    //         })
    //         setSuccessMsg("")
    //     } else if (email === "") {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Please give your Email!',
    //             text: 'Please provide your email!',
    //         })
    //         setSuccessMsg("")
    //     } else if (!emailValidation(email)) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Give a valid Email!',
    //             text: 'Please provide your valid email!',
    //         })
    //         setSuccessMsg("")
    //     } else if (subject === "") {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Plese give your Subject!',
    //             text: 'Please provide your subject!',
    //         })
    //         setSuccessMsg("")
    //     } else if (message === "") {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Message is required!',
    //             text: 'Please some type your message!',
    //         })
    //         setSuccessMsg("")
    //     } else {
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Messages has been sent Successfully!',
    //             text: `Thank you dear ${username}, Your Messages has been sent Successfully!`,
    //         })
    //         setErrMsg("");
    //         setUsername("");
    //         setPhoneNumber("");
    //         setEmail("");
    //         setSubject("");
    //         setMessage("");
    //     }
    // };

    return (
        <section id='contact' className='w-full py-7 mt-24'>

            <div className='w-full'>
                <h2 className='text-4xl font-bold my-7 flex'><span>Contact With Me</span> <HiArrowRight className='mt-2 ml-10'></HiArrowRight></h2>
                <div className='w-full h-auto md:flex gap-10 items-center'>
                    
                    {/* right side */}
                    <div className='w-full md:w-[60%] h-full px-4 md:px-0  from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne flex flex-col'>
                        <form ref={form}  className='w-full flex flex-col gap-6 py-2'>
                            
                    

                            <div className='w-full flex gap-10'>
                                {/* name */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
                                    <input onChange={(e) => setUsername(e.target.value)} value={username} name='from_name' type="text" placeholder="name" className="rounded-md p-2" />
                                </div>

                                {/* phone number */}

                                {/* <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>phone number</p>
                                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" placeholder="phone" className="" />
                                </div> */}
                            </div>

                            <div className='w-full flex gap-10'>
                                {/* email */}
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>email</p>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} name='user_email' type="email" placeholder="email" className="rounded-md p-2" />
                                </div>

                                {/* subject */}
                                {/* <div className='w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>subject</p>
                                    <input onChange={(e) => setSubject(e.target.value)} value={subject} type="text" placeholder="subject" className="" />
                                </div> */}
                            </div>

                            {/* message */}
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>message</p>
                                <textarea onChange={(e) => setMessage(e.target.value)} value={message} name='message' rows="10" className="rounded-md " placeholder='Your Message'>

                                </textarea>

                                {/* w-full bg-[#191b1e] p-4 border-[1px] border-pink-500 rounded-lg */}

                                {/* <input type="email" placeholder="subject" className="contactInput" /> */}
                            </div>

                            <div className='text-center'>
                                {/* <button onClick={handleSend} className="btn btn-block  btn-outline duration-300 btn-secondary"><BsFillSendCheckFill></BsFillSendCheckFill> Submit</button> */}
                                <input type="submit" className="btn btn-block  btn-outline duration-300 btn-secondary" value="Submit" />
                            </div>
                        </form>
                    </div>

                    <div className='w-full md:w-[40%] '>
                        <h3 className='text-4xl font-bold'>Get in touch</h3>
                        <p>Fill in the form to start a conversation</p>
                        <p className='flex my-5'>
                            <HiLocationMarker></HiLocationMarker>
                            <span className='-mt-1 ml-3'>Dinajpur , Bangladeshh</span></p>
                        <p className='flex mb-5'><HiPhone></HiPhone> <span className='-mt-1 ml-3'>+8801794078531</span> </p>
                        <p className='flex'><HiMail></HiMail> <span className='-mt-1 ml-3'>bishawnathray401932@gmail.com</span></p>
                    <Lottie animationData={developer}></Lottie>
                    </div>
                </div>
            </div>
            <hr className='mt-10'/>
        </section>
    );
};

export default Contact;