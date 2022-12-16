
import { Box, Switch, Tab, Tabs } from '@mui/material';
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
const label2 = { inputProps: { 'aria-label': 'Switch demo' } }; 

const SettingCustomer = () => {
    const { height, width } = useWindowSize();
    const [value, setValue] = useState("Notification Settings")

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setTimeout(() => { window.scrollTo(0, document.body.scrollTop) }, 50);

    };

    const renderSwitch = (param: string) => {
        switch (param) {
            case "Notification Settings":
                return <>
                    <div className='flex items-center'>
                        <p>Push Notification</p>
                        <div className='ml-6'>
                        <Switch {...label2} defaultChecked /> 
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p>Event  Notification</p>
                        <div className='ml-6'>
                        <Switch {...label2} defaultChecked /> 
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p>Chat Notification</p>
                        <div className='ml-6'>
                        <Switch {...label2} defaultChecked /> 
                        </div>
                    </div>

                </>;
            case "Privacy Policy":
                return <>
                    <div className='w-full md:w-[70%]'> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </>;
            case "Terms & Conditions":
                return <> 
                    <div className='w-full md:w-[70%]'> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                        <Tab value="Notification Settings" label="Notification Settings" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />

                        <Tab value="Privacy Policy" label="Privacy Policy" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />

                        <Tab value="Terms & Conditions" label="Terms & Conditions" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />

    

                    </Tabs>
                </Box>

                <div className='mt-6'>


                    {renderSwitch(value)}
                </div>
            </section>

        </div>
    );
};

export default SettingCustomer;