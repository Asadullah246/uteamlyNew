
import Image from 'next/image';
import React from 'react';
import loginPic from "../assets/images/onboarding.png"
import logo from "../assets/images/mainLogo.png"
import google from "../assets/images/google.svg"

const Signup = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='w-screen lg:w-[50%]'> 
                    <div className='w-[90%] md:w-[50%] mx-auto pt-6'>
                        <Image src={logo} alt="" />
                        <h4 className='text-xl mt-8 font-bold'>Signup</h4>
                      
                            <button style={{border:"0.5px solid rgba(0, 0, 0, 0.7)",borderRadius:"43px"}} className="py-2 text-center w-full mt-6 flex justify-center items-center">  
                                <div className='flex justify-center items-center w-full mx-auto'> 
                                    <Image src={google} alt="" className='w-[1.2em]' />
                                    <p className='font-[600] text-sm ml-1 md:ml-2 px-1'>Sign up with Google</p></div>
                            </button>
                       
                        <div className='flex mt-6 items-center justify-between'>
                            <hr className='w-[20%]  hidden md:block' />
                            <p>or Sign up with Email</p>
                            <hr className='w-[20%]  hidden md:block' /> 
                        </div>
                        <div className='mt-6'>
                            <input type="text" placeholder='Name' className='w-full py-2 px-3 rounded-[43px] border-2 mb-6' name="" id="" />
                            <input type="email" placeholder='Email' className='w-full py-2 px-3 rounded-[43px] border-2 mb-6' name="" id="" />
                            <input type="password" placeholder='Password' className='w-full py-2 px-3 rounded-[43px] border-2 ' name="" id="" />
                        </div>
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='flex items-center'>
                                <input type="checkbox" name="" id="" />
                                <small className='ml-2'>Remember me</small>
                            </div>

                        </div>
                        <button className='w-full bg-primary text-white font-semibold py-2 rounded-[43px] mt-6 mb-6'>Signup</button>

                        <small className=''>Already have an Account?  <span className='text-[#0F87E4] font-semibold cursor-pointer'>Login</span></small>
                    </div>

                </div>
                <Image src={loginPic} alt="" className='hidden lg:block lg:w-[50vw] h-screen' />
            </div>
        </div>
    );
};

export default Signup; 