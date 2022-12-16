import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import videoCarousel from "../../assets/images/videoCarousel.jpg"
import videoCarousel2 from "../../assets/images/videoCarousel2.jpg"
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

// import exampleVideo from "../../assets/videos/exampleVideo.mp4" 



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3.5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2.5,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1.5,
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

const TrainingEmployee = () => {
    const { height, width } = useWindowSize();
    return (
        <div className=''> 

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

            <section className='mt-6 '>

                <h6 className='text-base text-[#0F87E4] font-semibold mb-6'>Training</h6>
                {/* width="320" height="240" */}

                <video className='h-[300px] w-[600px] rounded-lg mx-auto mb-4' controls autoPlay={true} muted playsInline >
                    {/* <source src="mov_bbb.mp4" type="video/mp4" />
                    <source src="mov_bbb.ogg" type="video/ogg" /> */}
                </video>

                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container" 
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px" 

                    // containerClass="container-with-dots"
                    // itemClass="image-item"
                    deviceType={''} 
                    centerMode={false}
                >
                    <div><Image src={videoCarousel} alt="" className=' rounded-lg h-[200px] w-[300px]' /></div>
                    <div><Image src={videoCarousel2} alt="" className=' rounded-lg h-[200px] w-[300px]' /></div>
                    <div><Image src={videoCarousel} alt="" className=' rounded-lg h-[200px] w-[300px]' /></div>
                    <div><Image src={videoCarousel2} alt="" className=' rounded-lg h-[200px] w-[300px]' /></div>
                    <div><Image src={videoCarousel} alt="" className=' rounded-lg h-[200px] w-[300px]' /></div>
                    <div><Image src={videoCarousel2} alt="" className=' rounded-lg h-[200px] w-[300px]' /></div>
                    <div><Image src={videoCarousel} alt="" className=' rounded-lg h-[200px] w-[300px]' /></div>
                    
                </Carousel>;

            </section>

        </div>
    );
};

export default TrainingEmployee; 