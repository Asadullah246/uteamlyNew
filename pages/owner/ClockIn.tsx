import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import Table from '../../components/table';

// get window dimension 

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}



const ClockIn = () => {

    const { height, width } = useWindowSize();
    return (
        <div>
            {/* search bar and profile */}

            <section className={` ${width >= 900 ? "md:flex justify-between items-center" : "hidden"} `}>
                <div className='relative'>
                    <input type="text" className='bg-[#EBEAEA] w-[350px] h-[45px] rounded-md ' />
                    <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' />
                </div>
                <div>
                    <Image src={avatar} alt="" className='h-[70px] w-auto' />
                </div>
            </section>
            <h6 className='text-base text-[#0F87E4] font-semibold mt-6 mb-4'>Shift Start/End time</h6>
            <table className='w-full border-separate border-spacing-y-2 table-auto'>
                <thead>
                    <tr className=''>
                        <th className='text-start pl-2 break-words px-2 text-xs md:text-sm lg:text-base '>Task Name</th>
                        <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Start Date</th>
                        <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Duo date</th>
                        <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Over Time</th>
                        <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Assigned To</th>
                    </tr>

                </thead>
                <tbody>

                    {
                        [...Array(4)].map((d, index) => {
                            return (
                                <tr key={index + 1} className='rounded border shadow-lg '>
                                    <td className='border-y-2 pl-2 rounded-tl-lg rounded-bl-lg py-3 text-left break-words px-2 text-xs md:text-sm lg:text-base '>Pop Bug Fix</td>
                                    <td className='border-y-2 py-3 break-all px-2 text-xs md:text-sm lg:text-base '>13/2/2020</td>
                                    <td className='border-y-2 py-3 break-all px-2 text-xs md:text-sm lg:text-base '>14/2/2020</td>
                                    <td className='border-y-2 py-3 break-words px-2 text-xs md:text-sm lg:text-base '>1  hours</td>
                                    <td className='border-y-2 text-[0.7em] md:text-[1em] py-3'>Dinesh Chugtai</td>

                                </tr>
                            )
                        })
                    }




                </tbody>


            </table>

        </div>
    );
};

export default ClockIn;