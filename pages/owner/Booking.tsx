import { Box, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import Table from '../../components/table';

const Booking = () => {
    const [value, setValue] = useState("Tasks")
    const bookingTable=["Task Name", "Start Date", "Duo Date", "Over Time","Assigned To"]
    const requestTable=["Task Name", "Start Date", "Duo Date", "Over Time","Requested By","addRemoveBtn"]

    const handleChange = (event: React.SyntheticEvent, newValue: string) => { 
        setValue(newValue);
        setTimeout(() => { window.scrollTo(0, document.body.scrollTop) }, 50);

    };

    const renderSwitch = (param:string) => {
        switch (param) {
          case "Tasks":
            return <Table />;
          case "Request":
            return <Table />;

        }
      }
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

                {/* table  */}

                <section>
                    <h6>Todays task</h6>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            variant="scrollable"
                            scrollButtons={false}
                            allowScrollButtonsMobile
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                        // TabIndicatorProps={{ style: { background: 'orange' } }}
                        // initialSelectedIndex={'Tasks'}

                        >
                            <Tab value="Tasks" label="Tasks" />
                            <Tab value="Request" label="Request" />

                        </Tabs>
                    </Box>
                    {renderSwitch(value)}


                   
                </section>
            </section>


        </>
    );
};

export default Booking;