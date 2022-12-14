import React,{useState} from 'react';

const Table = () => {
    return (
        <>
            <table className='w-full border-separate border-spacing-y-2'>
                <thead>
                    <tr className=''>
                        <th className='text-start pl-2'>Task Name</th>
                        <th className='text-start'>Start Date</th>
                        <th className='text-start'>Duo date</th>
                        <th className='text-start'>Over Time</th>
                        <th className='text-start'>Assigned To</th>
                    </tr>

                </thead>
                <tbody>

                    {
                        [...Array(4)].map((d, index) => {
                            return (
                                <tr key={index + 1} className='rounded border shadow-lg '>
                                    <td className='border-y-2 pl-2 rounded-tl-lg rounded-bl-lg py-3 text-left'>Pop Bug Fix</td>
                                    <td className='border-y-2 py-3'>13/2/2020</td>
                                    <td className='border-y-2 py-3'>14/2/2020</td>
                                    <td className='border-y-2 py-3'>1  hours</td>
                                    {/* <td className='border-y-2   py-3'>Dinesh Chugtai</td> */}
                                    <td className='border-y-2 rounded-tr-lg rounded-br-lg py-3  max-w-[120px]'>Dinesh Chugtai 
                                    <button  className='bg-third py-[2px] px-3 rounded-[3px] text-white text-sm ml-3'>accept</button> <button className='bg-fourth py-[2px] px-3 rounded-[3px] text-white text-sm '>delete</button></td>
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