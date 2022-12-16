

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import clock from "../../assets/images/clock.svg"
import notification from "../../assets/images/notification.svg"
import arrowDown from "../../assets/images/arrowDown.svg"
import settingSearch from "../../assets/images/settingSearch.svg"
import setting2 from "../../assets/images/setting2.svg"
import documentImg from "../../assets/images/document.svg"
import deleteImg from "../../assets/images/delete.svg"
import download from "../../assets/images/download.svg"
import Checkbox from '@mui/material/Checkbox';
import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box, Typography } from '@mui/material';

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
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Forms = () => { 
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

            {/* document search  */}

            <section className={`mt-8 ${width >= 900 ? "md:flex justify-between items-center" : "hidden"} `}>

                <div>
                    <h6 className='text-base text-[#0F87E4] font-semibold mb-6'>Document</h6>
                </div>
                <div className='relative'>
                    <input type="text" className='bg-[#EBEAEA] w-[300px] h-[35px] rounded-md ' />
                    <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' />
                    <Image src={settingSearch} alt="" className='absolute top-[50%] right-3 translate-y-[-50%]' />
                </div>
            </section>

            <section className='mt-6 flex justify-between items-center'>
                <button className='bg-primary py-2 px-12 text-white rounded my-3 font-[500] whitespace-nowrap'
               onClick={handleOpen} >Add New</button> 
                <button className='h-fit p-2 bg-primary rounded-md'><Image src={setting2} alt="" /></button>
            </section>

            {/* document table  */}

            <section>
                <table className='w-full border-separate border-spacing-y-2 table-auto'>
                    <thead className='hidden'>
                        <tr className=''>
                            {/* <th className='text-start pl-2 break-words px-2 text-xs md:text-sm lg:text-base '>Task Name</th> */}
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
                                    <tr key={index + 1} className='rounded-lg flex justify-between items-center px-2 my-2 h-[55px]' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)", borderRadius: "7px" }}>
                                        <td className='   py-3 text-left break-words px-2 text-xs md:text-sm lg:text-base '>
                                            <div className='flex items-center break-words'>
                                                <Checkbox {...label} />
                                                <div className='flex items-center justify-start ml-0 md:ml-8 lg:ml-10'>
                                                    <Image src={documentImg} alt="" />
                                                    <small >Sc_19826_Recipt</small>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className=' break-all px-2 text-xs md:text-sm lg:text-base '>
                                               
                                                </td> */}
                                        <td className='  px-2 break-words text-xs md:text-sm lg:text-base '><small className='p-1 rounded font-[600] bg-[#E4E4E4]'>PDF</small></td>
                                        <td className=' break-words px-2 text-xs md:text-sm lg:text-base '>9MB</td>
                                        <td className=' whitespace-nowrap '>
                                            <button className='bg-[#E4E4E4] p-1 rounded mr-1 md:mr-2'><Image src={download} alt="" className='w-[0.6em] md:w-[1em]' /></button>
                                            <button className='bg-[#E4E4E4] p-1 rounded mr-1 md:mr-2'><Image src={deleteImg} alt="" className='w-[0.6em] md:w-[1em]' /></button>
                                        </td>

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

export default Forms; 