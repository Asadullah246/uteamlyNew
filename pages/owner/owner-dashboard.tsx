
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"

import dynamic from 'next/dynamic'
import Table from '../../components/table';
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


const OwnerDashboard = () => {
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

                <section className={` ${width >= 900 ?"md:flex justify-between items-center":"hidden"} `}> 
                    <div className='relative'>
                        <input type="text" className='bg-[#EBEAEA] w-[350px] h-[45px] rounded-md ' />  
                        <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' />
                    </div>
                    <div>
                        <Image src={avatar} alt="" className='h-[70px] w-auto' />
                    </div>
                </section>

                {/* chart  */}

                <section className=' flex flex-col-reverse md:flex md:flex-row justify-start mt-10 '>  

                    <div id="chart" className='shadow-2xl rounded-[8px] py-4 px-2'>
                        <h6 className='text-base text-[#0F87E4] font-semibold'>Progress</h6>
                        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={250} width={(width>=500) ? 500 : width-30} /> 
                    </div>
                    <div className='ml-0 md:ml-12'>  
                        <h6 className='text-base text-[#0F87E4] font-semibold mt-4'>Start the day</h6>
                        <button className='bg-primary py-2 px-12 text-white rounded my-3 font-[500] whitespace-nowrap'>Sign in</button>
                    </div>
                </section>

                {/* table  */}

                <section className='mt-10'>
                  
                    <h6 className='text-base text-[#0F87E4] font-semibold mb-6'>Todays task</h6>
                    <Table />
                </section>
            </div>


        </>
    );
};

export default OwnerDashboard;