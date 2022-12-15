import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import Table from '../../components/table';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 8,
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
    const [dateValue, setDateValue] = useState(-3)

    const [date1, setDate1] = useState("")
    const [date2, setDate2] = useState("")
    const [date3, setDate3] = useState("")
    const [date4, setDate4] = useState("")
    const [date5, setDate5] = useState("")
    const [date6, setDate6] = useState("")
    const [date7, setDate7] = useState("")
    const [date8, setDate8] = useState("")



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

    useEffect(() => {
        let newDate: Date = new Date()
        console.log(dateValue,"datavluae is");

        let datefirst:any = new Date(newDate.getTime() + (Number(dateValue) * 24 * 60 * 60 * 1000));
        let datenext1:any = new Date(newDate.getTime() + ((Number(dateValue) + 1) * 24 * 60 * 60 * 1000));
        let datenext2:any = new Date(newDate.getTime() + ((Number(dateValue) + 2) * 24 * 60 * 60 * 1000));
        let datenext3:any = new Date(newDate.getTime() + ((Number(dateValue) + 3) * 24 * 60 * 60 * 1000));
        let datenext4:any = new Date(newDate.getTime() + ((Number(dateValue) + 4) * 24 * 60 * 60 * 1000));
        let datenext5:any = new Date(newDate.getTime() + ((Number(dateValue) + 5) * 24 * 60 * 60 * 1000));
        let datenext6:any = new Date(newDate.getTime() + ((Number(dateValue) + 6) * 24 * 60 * 60 * 1000));
        let datenext7:any = new Date(newDate.getTime() + ((Number(dateValue) + 7) * 24 * 60 * 60 * 1000));

        setDate1(datefirst)
        setDate2(datenext1)
        setDate3(datenext2)
        setDate4(datenext3)
        setDate5(datenext4)
        setDate6(datenext5)
        setDate7(datenext6)
        setDate8(datenext7)
        console.log("fistdate",datefirst);  

    }, [dateValue])  


    // let fullDate = "Mon Dec 12 2022 07:57:28 GMT+0600 (Bangladesh Standard Time)"
    const dateMonth = (fullDate: any) => {
        const fullDateString = fullDate.toString();
        const newMonth = fullDateString.substring(4, 7)
        const newDay = fullDateString.substring(8, 11)
        return (
            <>
                <p>{newMonth}</p>
                <p>{newDay}</p>
            </>
        )


    }
 

    const left = () => {
        setDateValue(Number(dateValue) - 8)   
    }

    const right = () => {
        setDateValue(Number(dateValue) + 8) 
    }


    return (
        <div>
            <h5 className='text-xl'>Time Sheet</h5>

            {/* calender  */}

            <Carousel
                swipeable={false}
                draggable={false}
                // showDots={true}
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
                className='timeCarousel'
            >
                {/* <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div> 
                <div>{date1.toString().substring(4, 7)}</div>   */}
                <div>{dateMonth(date1)}</div>
                <div>{dateMonth(date2)}</div>
                <div>{dateMonth(date3)}</div>
                <div>{dateMonth(date4)}</div>
                <div>{dateMonth(date5)}</div>
                <div>{dateMonth(date6)}</div>
                <div>{dateMonth(date7)}</div>
                <div>{dateMonth(date8)}</div>



            </Carousel>
            <button onClick={left}>left</button> <br />
            <button onClick={right}>right</button>
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