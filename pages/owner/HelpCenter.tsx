import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import flag from "../../assets/images/helpCenter/flag.svg"
import editor from "../../assets/images/helpCenter/checklist (1).svg"
import links from "../../assets/images/helpCenter/link.svg"
import meeting from "../../assets/images/helpCenter/meeting.svg"
import jigsaw from "../../assets/images/helpCenter/jigsaw.svg"
import speaker from "../../assets/images/helpCenter/loud-speaker.svg"

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

const HelpCenter = () => {
    const { height, width } = useWindowSize();

    const helpNames=["Help Center","Using Sales Layers","Channels & Integrations","Edition Groups","Edition Groups","Updates"]
    const helpImg=[flag, editor, links, meeting, jigsaw,speaker]
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

            <section className='mt-6'>
                <h6 className='text-[#0F87E4] font-semibold mb-8 text-base'>Help</h6>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-12 mx-auto'> 

                    {
                        [...Array(6)].map((d, index) => {
                            return (
                                <div key={index} style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.25)", borderRadius: "6px" }} className=" h-[30vw] w-[42vw]  lg:h-[200px] lg:w-[300px] flex justify-center items-center cursor-pointer mx-auto"> 

                                    <div className='text-center pt-4 md:pt-6'>
                                        <Image src={helpImg[index]} alt="" className='mx-auto w-[1.8em] md:w-[3.5em] h-auto' /> 
                                        <h6 className='text-[#0F87E4] font-semibold mb-4 text-sm md:text-base mt-2 md:mt-8'>{helpNames[index]}</h6> 
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </section>


        </div>
    );
};

export default HelpCenter;