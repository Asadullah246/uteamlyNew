
import Image from 'next/image';
import React from 'react';
import loginPic from "../assets/images/onboarding.png"
import logo from "../assets/images/mainLogo.png"

const onboarding = () => {
    return (
        <div>
        <div className='flex justify-between'>
            <div className='w-screen lg:w-[50%]'> 
                <div className='w-[80%] md:w-[60%] mx-auto pt-6'>
                    <Image src={logo} alt="" />
                   <div className='mt-8 md:mt-16 lg:mt-20'>
                   <h6 className='text-[#0F87E4] font-semibold'>With Utealy you can manage shifts</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                   </div>
                   
                  
                </div>

            </div>
            <Image src={loginPic} alt="" className='hidden lg:block lg:w-[50vw] h-screen' />
        </div>
    </div>
    );
};

export default onboarding;