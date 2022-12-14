import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import Table from '../../components/table';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const TimeSheet = () => {

    const [value, setValue] = useState("Tasks");
    const [dateValue, setDateValue]=useState(-3)


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setTimeout(() => { window.scrollTo(0, document.body.scrollTop) }, 50);

    };

    const renderSwitch = (param: string) => {
        switch (param) {
            case "Work Hours":
                return <Table />;
            case "Paid Hours":
                return <Table />;

        }
    }

    let newDate:Date = new Date()

    let date1 = new Date(newDate.getTime() + (dateValue * 24 * 60 * 60 * 1000));   
    let date2 = new Date(newDate.getTime() + ((dateValue+1) * 24 * 60 * 60 * 1000));   
    let date3 = new Date(newDate.getTime() + ((dateValue+2) * 24 * 60 * 60 * 1000));   
    // let date4 = new Date(newDate.getTime() + ((dateValue+3) * 24 * 60 * 60 * 1000));   
    // let date5 = new Date(newDate.getTime() + ((dateValue+4) * 24 * 60 * 60 * 1000));   
    // let date6 = new Date(newDate.getTime() + ((dateValue+5) * 24 * 60 * 60 * 1000));   
    // let date7 = new Date(newDate.getTime() + ((dateValue+6) * 24 * 60 * 60 * 1000));   
    // let date8 = new Date(newDate.getTime() + ((dateValue+7) * 24 * 60 * 60 * 1000)); 
    
    let btnRight=document.querySelector(".react-multiple-carousel__arrow--right")
    btnRight.addEventListener("click",function(e){  
        e.preventDefault()
        console.log("clicked");
        setDateValue(dateValue+3)   
    }) 
    
    return ( 
        <div>
            <h5 className='text-xl'>Time Sheet</h5>

            {/* calender  */}

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlay={false} 
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <p>{date1.toString()}</p>  
                   
                </div>
                <div>
                    <p>{date2.toString()}</p>  
                   
                </div>
                <div>
                    <p>{date3.toString()}</p> 
                   
                </div>
                {/* <div>
                    <p>{date4.toString()}</p>
                   
                </div>
                <div>
                    <p>{date5.toString()}</p>
                   
                </div>
                <div>
                    <p>{date6.toString()}</p>
                   
                </div>
                <div>
                    <p>{date7.toString()}</p>
                   
                </div> */}

            </Carousel>;

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

        </div>
    );
};

export default TimeSheet;