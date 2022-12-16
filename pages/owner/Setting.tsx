
import { Box, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import settingSearch from "../../assets/images/settingSearch.svg"
import mainLogo from "../../assets/images/Rectangle 1309.svg"
import plusImg from "../../assets/images/plus.svg"


import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

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

const Setting = () => {
    const { height, width } = useWindowSize();
    const [value, setValue] = useState("General Settings")

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setTimeout(() => { window.scrollTo(0, document.body.scrollTop) }, 50);

    };

    const renderSwitch = (param: string) => {
        switch (param) {
            case "General Settings":
                return <>
                    <p>logo :</p>
                    <div className='flex mt-6'>
                        <div className='mr-4 w-[4em] h-[4em] ' style={{ boxShadow: " 0px 0px 8px rgba(0, 0, 0, 0.25)", borderRadius: "4px" }}>
                            <Image src={mainLogo} alt="" className='w-full h-full' />
                        </div>
                        <div className='mr-4 w-[4em] h-[4em] flex justify-center items-center cursor-pointer' style={{ boxShadow: " 0px 0px 8px rgba(0, 0, 0, 0.25)", borderRadius: "4px" }}>
                            <Image src={plusImg} alt="" />
                        </div>

                    </div>

                    <p>Name :</p>
                    <div className='mt-6 w-full md:w-[360px]'>
                        <p className='w-full bg-[#F6F6F6] rounded-md py-2 px-3 md:px-4'>Uteamly</p>

                    </div>
                    <p className='mt-6'>Description :</p>
                    <div className='mt-6 w-full md:w-[360px]'>
                        <p className='w-full bg-[#F6F6F6] rounded-md py-2 px-3 md:px-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>

                    </div>

                </>;
            case "Billings":
                return <>
                    <p>Logo :</p>
                </>;
            case "Admins":
                return <>

                    <div className=' flex justify-between md:justify-end items-center'>
                        <button className='text-white bg-primary rounded-md py-2 px-6 md:px-8 lg:px-10 text-sm mr-4'>Edit</button>
                        <button className='text-white bg-primary rounded-md py-2 px-6 md:px-8 lg:px-10 text-sm'>Add New Admin</button>

                    </div>

                    <div className='mt-6'>
                        <table className='w-full border-separate border-spacing-y-2 table-auto'>
                            <thead>
                                <tr className=''>
                                    <th className='text-start pl-2 break-words px-2 text-xs md:text-sm lg:text-base '>ID</th>
                                    <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Name</th>
                                    <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Role</th>
                                    <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Phone No.</th>
                                    <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Email</th>
                                </tr>

                            </thead>
                            <tbody>

                                {
                                    [...Array(4)].map((d, index) => {
                                        return (
                                            <tr key={index + 1} className='rounded border shadow-lg '>
                                                <td className='border-y-2 pl-2 rounded-tl-lg rounded-bl-lg py-3 text-left break-words px-2 text-xs md:text-sm lg:text-base '>
                                                    <td className='   py-3 text-left break-words px-2 text-xs md:text-sm lg:text-base '>
                                                        <div className='flex items-center break-words max-h-[0px]'>
                                                            <Checkbox {...label} />
                                                            <div className='flex items-center justify-start ml-0 md:ml-6 '>

                                                                <small >8454</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </td>
                                                <td className='border-y-2 py-3 break-all px-2 text-xs md:text-sm lg:text-base '>Jack Hood</td>
                                                <td className='border-y-2 py-3 break-all px-2 text-xs md:text-sm lg:text-base '>Manager</td>
                                                <td className='border-y-2 py-3 break-words px-2 text-xs md:text-sm lg:text-base '>0900-87621231</td>
                                                <td className='border-y-2 break-all text-xs md:text-sm lg:text-base  py-3'>jackhood@abc.com</td>

                                            </tr>
                                        )
                                    })
                                }




                            </tbody>


                        </table>
                    </div>

                </>;

        }
    }
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

            <section>
                <h6 className='text-base text-[#0F87E4] font-semibold mb-6'>Setting</h6>

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
                        <Tab value="General Settings" label="General Settings" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />
                        <Tab value="Billings" label="Billings" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />
                        <Tab value="Admins" label="Admins" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />

                    </Tabs>
                </Box>

                <div className='mt-4'>


                    {renderSwitch(value)}
                </div>
            </section>

        </div>
    );
};

export default Setting;