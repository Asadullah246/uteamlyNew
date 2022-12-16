import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import clock from "../../assets/images/clock.svg"
import arrowDown from "../../assets/images/arrowDown.svg"
import note from "../../assets/images/note.svg"
import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box, Typography } from '@mui/material';

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


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:"10px", 
    boxShadow: 24,
    p:4,
    
};

const EmployeeClockIn = () => {
    const { height, width } = useWindowSize();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

             {/* <Button onClick={handleOpen}>Open modal</Button> */}
             <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="w-[90%] md:w-[450px] ">
                       <div className='w-full md:w-3/4 mx-auto'>
                       <Typography id="transition-modal-title" variant="p" component="p" style={{color:"#0F87E4", textAlign:"center", fontWeight:"600", marginBottom:"15px"}}> 
                       Signature 
                        </Typography>
                       {/* <input type="text" placeholder='Task Name' name="" id="" className='border-2 rounded-3xl px-3 py-1 w-full mb-4' /> */}
                      <textarea name="" id=""  className='w-full h-[170px] mb-6' style={{border:"0.5px solid rgba(0, 0, 0, 0.7)",borderRadius:"11px"}} ></textarea> 
                       <button className='text-white bg-primary rounded-3xl w-full py-2' onClick={handleClose}>Create</button>     
                       </div>
                      
                    </Box>
                </Fade>
            </Modal>

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
                <h6 className='text-lg text-[#0F87E4] font-semibold mb-6'>Hi Dinesh, Let’s start the day </h6>

                <div className='block md:flex justify-start items-center'>
                    <div className='flex items-center justify-between md:justify-start '>
                        <div className='block md:flex items-center md:mr-3 lg:mr-6'>
                            <p className='flex items-center'> <span className='font-[500]  text-sm'>12:01 AM</span></p>
                            <button className='bg-primary py-1 px-6 text-white rounded my-3 ml-0 md:ml-3 text-sm font-[500] whitespace-nowrap' >Start Day</button>
                        </div>
                        <div className='block md:flex items-center md:mr-3 lg:mr-6'>
                            <p className='flex items-center'> <span className='font-[500] text-sm'>12:01 AM</span></p>
                            <button className='bg-transparent py-1 px-7 text-=[#014275] rounded my-3 ml-0 md:ml-3 text-sm font-[500] whitespace-nowrap ' style={{ border: "1px solid #014275" }} >End Day</button>
                        </div>
                    </div>
                    <div>
                        <button className='bg-primary py-[6px] px-4 text-white rounded my-3 ml-0 md:ml-3 text-sm font-[500] whitespace-nowrap' onClick={handleOpen} >
                            <div className='flex'>
                                <Image src={note} alt="" />
                                <p className='mb-0 font-[500] ml-2'>Add Note</p>
                            </div>
                        </button>

                    </div>
                </div>
            </section>

            {/* Upcoming Shifts */}

            <section className='mt-6'>
            <h6 className='text-base text-[#0F87E4] font-semibold mb-6'>Upcoming Shifts</h6>

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
    );
};

export default EmployeeClockIn;