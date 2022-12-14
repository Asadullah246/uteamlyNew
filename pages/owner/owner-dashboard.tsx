
import Image from 'next/image';
import React, { useState } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"

import dynamic from 'next/dynamic'
import Table from '../../components/table';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

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
    return (
        <>
            {/* search bar  */}
            <section>
                <div className='flex justify-between items-center'>
                    <div className='relative'>
                        <input type="text" className='bg-[#EBEAEA] w-[350px] h-[51px] rounded-md' />
                        <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' />
                    </div>
                    <div>
                        <Image src={avatar} alt="" />
                    </div>
                </div>

                {/* chart  */}

                <section className='flex justify-start'>
                    <div id="chart" className='shadow-2xl rounded-[8px]'>
                        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={250} width={500} />
                    </div>
                    <div>
                        <p>Start the day </p>
                        <button className='bg-primary py-1 px-6 text-white rounded'>Sign in</button>
                    </div>
                </section>

                {/* table  */}

                <section>
                    <h6>Todays task</h6>
                  <Table/> 
                </section>
            </section>


        </>
    );
};

export default OwnerDashboard;