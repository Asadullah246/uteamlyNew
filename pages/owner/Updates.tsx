
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import employee from "../../assets/images/employee.svg"
import clock from "../../assets/images/clock.svg"
import notification from "../../assets/images/notification.svg"
import arrowDown from "../../assets/images/arrowDown.svg"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import dynamic from 'next/dynamic'
// import Table from '../../components/table';
// import "../../styles/globals.css" ;  

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


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


const Updates = () => {
    const [chartData, setChartData] = useState({

        series: [{
            data: [400, 430, 448, 470, 540, 580, 690]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 250
            },
            plotOptions: {
                bar: {
                    borderRadius: 0,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy'
                ],
            }
        },


    })
    const { height, width } = useWindowSize();
    return (
        <>

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

                {/* notification  */}

                <section className='mb-10 md:mb-0 mt-8 '>
                    <p className='text-[#0F87E4] font-semibold mb-8'>Latest Notofications (2)</p>

                    {
                        [...Array(10)].map((d, index) => {
                            return (
                                <div key={index} className='flex justify-between items-center rounded-[7px] mb-3 p-3' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)" }}>
                                    <div className='flex items-center'>
                                        <Image src={notification} alt="" />
                                        <div className='ml-2 md:ml-4'>
                                            <p className='mb-[2px] font-[500]'>Update of MR. Stark</p>
                                            <small>Thearapy is going great !</small>
                                        </div>
                                    </div>
                                    <div>
                                        <Image src={arrowDown} alt="" />
                                    </div>


                                </div> 

                            )
                        })
                    }


                </section>

            </div>


        </>
    );
};

export default Updates;