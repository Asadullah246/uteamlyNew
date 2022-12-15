import React,{useState} from 'react';

const Table = () => {
    return (
        <>
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
                                    {/* <td className='border-y-2   py-3'>Dinesh Chugtai</td> */}
                                    <td className='border-y-2 rounded-tr-lg rounded-br-lg py-3  max-w-[160px] break-words px-2 text-xs md:text-sm lg:text-base '>Dinesh Chugtai <span className='ml-2'></span>
                                   <span className='whitespace-normal md:whitespace-nowrap'> <button  className='bg-third py-[3px] px-3 rounded-[3px] text-white text-xs md:text-sm  my-1'>accept</button> <button className='bg-fourth py-[3px] px-3 rounded-[3px] text-white text-xs md:text-sm my-1'>delete</button></span>
                                    </td>
                                </tr>
                            )
                        })
                    }




                </tbody>


            </table>

        </>
    );
};

export default Table;