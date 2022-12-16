import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import clock from "../../assets/images/clock.svg"
import notification from "../../assets/images/notification.svg"
import arrowDown from "../../assets/images/arrowDown.svg"

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


const EmployeeDashboard = () => {
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


                <section className='mt-10 mb-6 md:mb-0'>

                    <div className='block md:flex justify-between items-start'>
                        <h5 className='text-lg text-[#0F87E4] font-semibold mb-4 md:mb-0'>Welcome Back, DInesh</h5>
                        <div className='flex md:block items-center justify-between'>
                            <div className='block md:flex items-center'>
                                <p className='flex items-center'><Image src={clock} alt="" className='h-[1em]' /> <span className='font-[500] '>12:01pm</span></p>
                                <button className='bg-primary py-1 px-6 text-white rounded my-3 ml-0 md:ml-3 text-sm font-[500] whitespace-nowrap' >Start Day</button>
                            </div>
                            <div className='block md:flex items-center'>
                                <p className='flex items-center'><Image src={clock} alt="" className='h-[1em]' /> <span className='font-[500]'>12:01pm</span></p>
                                <button className='bg-primary py-1 px-7 text-white rounded my-3 ml-0 md:ml-3 text-sm font-[500] whitespace-nowrap' >End Day</button>
                            </div>
                        </div>
                    </div>


                </section>

                {/* notification  */}

                <section className='mb-10 md:mb-0'>
                    <p className='text-[#0F87E4] font-semibold mb-4'>Latest Notofications (2)</p>

                    <div className='flex justify-between items-center rounded-[7px] mb-3 p-2' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)" }}>
                        <div className='flex items-center'>
                            <Image src={notification} alt="" />
                            <div className='ml-2 md:ml-4'>
                                <p className='mb-[2px] font-[500]'>Network Lag bug shift has been marked as complete </p>
                                <small>You can check the details of the shift.</small>
                            </div>
                        </div>
                        <div>
                            <Image src={arrowDown} alt="" />
                        </div>


                    </div>
                    <div className='flex justify-between items-center rounded-[7px] mb-3 p-2' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)" }}>
                        <div className='flex items-center'>
                            <Image src={notification} alt="" />
                            <div className='ml-2 md:ml-4'>
                                <p className='mb-[2px] font-[500]'>Network Lag bug shift has been marked as complete </p>
                                <small className='text-[#4A4A4A]'>You can check the details of the shift.</small>
                            </div>
                        </div>
                        <div>
                            <Image src={arrowDown} alt="" />
                        </div>


                    </div>
                </section>

                {/* upcoming tasks  */}
                <section>
                    <h6 className='text-base text-[#0F87E4] font-semibold mb-4 md:mb-6'>UpcomingTasks</h6>

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
                                            <td className='border-y-2   py-3'>Dinesh Chugtai</td>
                                         
                                        </tr>
                                    )
                                })
                            }




                        </tbody>


                    </table>

                </section>
            </div>


        </>
    );
};

export default EmployeeDashboard;