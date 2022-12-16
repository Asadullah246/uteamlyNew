
import { Box, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import Table from '../../components/table';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import leftArray from "../../assets/images/leftArray.svg"
import rightArray from "../../assets/images/rightArray.svg"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 8,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },

    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    }
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



const TimeSheetEmployee = () => {

    const [value, setValue] = useState("Work Hours");
    const [dateValue, setDateValue] = useState(-3)
    const { height, width } = useWindowSize();

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
                </>;
            case "Paid Hours":
                return <>
                <table className='w-full border-separate border-spacing-y-2 table-auto'>
                    <thead>
                        <tr className=''>
                            <th className='text-start pl-2 break-words px-2 text-xs md:text-sm lg:text-base '>Task Name</th>
                            <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Start Date</th>
                            <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Duo date</th>
                            <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Over Time</th>
                            <th className='text-start break-words px-2 text-xs md:text-sm lg:text-base '>Status</th>
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
                                        <td className='border-y-2 text-[#33B804]  py-3'>Paid</td>

                                    </tr>
                                )
                            })
                        }




                    </tbody>


                </table>
            </>;;

        }
    }

    useEffect(() => {
        let newDate: Date = new Date()
        console.log(dateValue, "datavluae is");

        let datefirst: any = new Date(newDate.getTime() + (Number(dateValue) * 24 * 60 * 60 * 1000));
        let datenext1: any = new Date(newDate.getTime() + ((Number(dateValue) + 1) * 24 * 60 * 60 * 1000));
        let datenext2: any = new Date(newDate.getTime() + ((Number(dateValue) + 2) * 24 * 60 * 60 * 1000));
        let datenext3: any = new Date(newDate.getTime() + ((Number(dateValue) + 3) * 24 * 60 * 60 * 1000));
        let datenext4: any = new Date(newDate.getTime() + ((Number(dateValue) + 4) * 24 * 60 * 60 * 1000));
        let datenext5: any = new Date(newDate.getTime() + ((Number(dateValue) + 5) * 24 * 60 * 60 * 1000));
        let datenext6: any = new Date(newDate.getTime() + ((Number(dateValue) + 6) * 24 * 60 * 60 * 1000));
        let datenext7: any = new Date(newDate.getTime() + ((Number(dateValue) + 7) * 24 * 60 * 60 * 1000));

        setDate1(datefirst)
        setDate2(datenext1)
        setDate3(datenext2)
        setDate4(datenext3)
        setDate5(datenext4)
        setDate6(datenext5)
        setDate7(datenext6)
        setDate8(datenext7)
        console.log("fistdate", datefirst);

    }, [dateValue])


    // let fullDate = "Mon Dec 12 2022 07:57:28 GMT+0600 (Bangladesh Standard Time)"
    const dateMonth = (fullDate: any) => {
        const fullDateString = fullDate.toString();
        const newMonth = fullDateString.substring(4, 7)
        const newDay = fullDateString.substring(8, 11)
        return (
            <>
                <p className='uppercase font-semibold mb-1'>{newMonth}</p>
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

            <section className={` ${width >= 900 ? "md:flex justify-between items-center" : "hidden"} `}>
                <div className='relative'>
                    {/* <input type="text" className='bg-[#EBEAEA] w-[350px] h-[45px] rounded-md ' />
                    <Image src={search} alt="" className='absolute top-[50%] left-3 translate-y-[-50%]' /> */}
                </div>
                <div>
                    <Image src={avatar} alt="" className='h-[70px] w-auto' />
                </div>
            </section>

            <h6 className='text-base text-[#0F87E4] font-semibold mt-10 mb-6'>Time Sheet</h6>



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
                    <Tab value="Work Hours" label="Work Hours" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />
                    <Tab value="Paid Hours" label="Paid Hours" style={{ color: "#0F87E4", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }} />

                </Tabs>
            </Box>

            {/* calender carousel  */}

            <section className='px-2 md:px-4 py-2 mt-6 rounded-md bg-[#F5F5F5] shadow-md relative '>
                <div className='px-2 mx-auto text-center'>
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

                        <div>{dateMonth(date1)}</div>
                        <div>{dateMonth(date2)}</div>
                        <div>{dateMonth(date3)}</div>
                        <div>{dateMonth(date4)}</div>
                        <div>{dateMonth(date5)}</div>
                        <div>{dateMonth(date6)}</div>
                        <div>{dateMonth(date7)}</div>
                        <div>{dateMonth(date8)}</div>

                    </Carousel>
                </div>

                <button onClick={left} className="absolute left-2 top-[18px]"><Image src={leftArray} alt="" /> </button>
                <button onClick={right} className="absolute right-2 top-[18px]"><Image src={rightArray} alt="" /> </button>
            </section>
            {/* table section  */}
            <section className='mt-6'>
                {renderSwitch(value)}
            </section>

        </div>
    );
};

export default TimeSheetEmployee;