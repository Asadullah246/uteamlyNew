import Image from 'next/image';
import React from 'react';
import onboardingImage from "../../assets/images/onboarding.png"

const Onboarding = () => {
    return (
        <div>
            <section className='flex'>
                <div>kd</div>
                <div className='w-[50%]'> 
                    <Image src={onboardingImage} alt="" className='w-full h-full' />
                </div>
            </section>
            
        </div>
    );
};

export default Onboarding;