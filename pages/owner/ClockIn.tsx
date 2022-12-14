import Image from 'next/image';
import React from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import Table from '../../components/table';

const ClockIn = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                    <div className='relative'>
                        <input type="text" className='bg-[#EBEAEA] w-[350px] h-[51px] rounded-md' />
                        <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' />
                    </div>
                    <div>
                        <Image src={avatar} alt="" />
                    </div>
                </div>
                <h5 className='text-xl'>Shift Start/End time</h5>
                <Table/>
            
        </div>
    );
};

export default ClockIn;