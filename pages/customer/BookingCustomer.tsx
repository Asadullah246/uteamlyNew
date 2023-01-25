
import { Box, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
// import Table from '../../components/table';

import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,

};

// window dimension 
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

const BookingCustomer = () => {
    const [value, setValue] = useState("Bookings")
    const { height, width } = useWindowSize();

    const [open, setOpen] = React.useState(false);

    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/booking')
            .then(res => res.json())
            .then(data => {
                setBooking(data.booking)
            })
    }, [])

    console.log("booking are", booking);

    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        e.preventDefault();
        let allData=e.target; 
        const data={
            task_name:allData.taskName.value,
            project:allData.project.value,
            start_date:allData.startDate.value,
            end_date:allData.endDate.value,
            duo_date:"",
            over_time:allData.overTime.value,
            assigned_to:allData.assignedTo.value,
        }
         
        fetch('http://localhost:3000/api/booking', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(data) 
        })
        .then(data=>{
            console.log(data); 
        })
        .catch(err=>{
            console.log(err); 
        })
        setOpen(false) 
    };

    const bookingTable = ["Task Name", "Start Date", "Duo Date", "Over Time", "Assigned To"]
    const requestTable = ["Task Name", "Start Date", "Duo Date", "Over Time", "Requested By", "addRemoveBtn"]

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setTimeout(() => { window.scrollTo(0, document.body.scrollTop) }, 50);

    };

    const renderSwitch = (param: string) => {
        switch (param) {
            case "Bookings":
                return <>
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
                                booking?.map((b, index) => {
                                    return (
                                        <tr key={index + 1} className='rounded border shadow-lg '>
                                            <td className='border-y-2 pl-2 rounded-tl-lg rounded-bl-lg py-3 text-left break-words px-2 text-xs md:text-sm lg:text-base '>{b.task_name}</td>
                                            <td className='border-y-2 py-3 break-all px-2 text-xs md:text-sm lg:text-base '>{b.start_date}</td>
                                            <td className='border-y-2 py-3 break-all px-2 text-xs md:text-sm lg:text-base '>{b.duo_date}</td>
                                            <td className='border-y-2 py-3 break-words px-2 text-xs md:text-sm lg:text-base '>{b.over_time}</td>
                                            <td className='border-y-2   py-3'>{b.assigned_to}</td>

                                        </tr>
                                    )
                                })
                            }




                        </tbody>


                    </table>
                </>;


        }
    }
    return (
        <>

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
                    <Box sx={style} className="w-[90%] md:w-[400px] ">
                        <div className='w-full md:w-3/4 mx-auto'>
                            <Typography id="transition-modal-title" variant="p" component="p" style={{ color: "#0F87E4", textAlign: "center", fontWeight: "600", marginBottom: "15px" }}>
                                Add New Booking
                            </Typography>
                            <form onSubmit={handleClose}>
                                <input type="text" placeholder='Task Name' name="taskName" id="" className='border-2 rounded-3xl px-3 py-1 w-full mb-4' />
                                <input type="text" placeholder='project' name="project" id="" className='border-2 rounded-3xl px-3 py-1 w-full mb-4' />
                                <input type="text" placeholder='Start Date' name="startDate" id="" className='border-2 rounded-3xl px-3 py-1 w-full mb-4' />
                                <input type="text" placeholder='End Date' name="endDate" id="" className='border-2 rounded-3xl px-3 py-1 w-full mb-4' />
                                <input type="text" placeholder='Over Time' name="overTime" id="" className='border-2 rounded-3xl px-3 py-1 w-full mb-4' />
                                <input type="text" placeholder='Assigned To' name="assignedTo" id="" className='border-2 rounded-3xl px-3 py-1 w-full mb-4' />
                                <button className='text-white bg-primary rounded-3xl w-full py-2' type='submit' >Create</button>  
                            </form>

                        </div>

                    </Box>
                </Fade>
            </Modal>


            <section>

                <section className={` ${width >= 900 ? "md:flex justify-between items-center" : "hidden"} `}>
                    <div className='relative'>
                        {/* <input type="text" className='bg-[#EBEAEA] w-[350px] h-[45px] rounded-md ' />   */}
                        {/* <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' /> */}
                    </div>
                    <div>
                        <Image src={avatar} alt="" className='h-[70px] w-auto' />
                    </div>
                </section>

                <section className={` ${width >= 900 ? "md:flex justify-between items-center" : "hidden"} `}>

                    <div>
                        <h6 className='text-base text-[#0F87E4] font-semibold mb-6'>Tasks</h6>
                    </div>
                    <div className='relative'>
                        <input type="text" className='bg-[#EBEAEA] w-[350px] h-[45px] rounded-md ' />
                        <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' />
                    </div>
                </section>



                {/* table  */}

                <section>

                    <button className='bg-primary py-2 px-12 text-white rounded my-3 font-[500] whitespace-nowrap' onClick={handleOpen} >Add New Booking</button>


                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            variant="scrollable"
                            scrollButtons={false}
                            allowScrollButtonsMobile
                            value={value}
                            onChange={handleChange}
                            // textColor="inherit"  
                            TabIndicatorProps={{ style: { background: '#0F87E4' } }}
                        // initialSelectedIndex={'Tasks'}

                        >
                            <Tab value="Bookings" label="Bookings" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />


                        </Tabs>
                    </Box>
                    <div className='mt-4'>
                        {renderSwitch(value)}
                    </div>



                </section>
            </section>


        </>
    );
};

export default BookingCustomer;