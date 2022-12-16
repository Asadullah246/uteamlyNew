
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png"
import search from "../../assets/images/search (1) 1.svg"
import img1 from "../../assets/images/Rectangle 1299.svg"
import img2 from "../../assets/images/Rectangle 1299 (1).svg"
import img3 from "../../assets/images/Rectangle 1299 (2).svg"
import img4 from "../../assets/images/Rectangle 1299 (3).svg"
import upload from "../../assets/images/upload.svg"
import sendingImg from "../../assets/images/send.svg" 

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


const MessageCustomer = () => {
    const { height, width } = useWindowSize();
    const [msg, setMsg]=useState(false)
    const showMessage=()=>{
        setMsg(true) 
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

            {/* message section  */}

            <section className='mt-6'>
                <div className='flex justify-between items-start h-[75vh]'>
                   
                    {
                        width <768 ? 
                        <>
                        {
                            msg?
                            <div className=' w-full md:block md:w-[60%] lg:w-[55%]  h-full py-2 md:py-3 relative' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)", borderRadius: "10px" }}>

                            <div className='py-3 md:py-4' style={{}}>
                                <div className='ml-3 flex justify-start items-center h-[45px] ' >
                                    <div className='h-full relative'>
                                        <Image src={img1} alt="" className='h-full w-auto rounded' />
                                        <div className='h-[7px] w-[7px] bg-[#3CDC04] absolute bottom-0 right-0' style={{ borderRadius: "50%" }}></div>
                                    </div>
                                    <div className='h-full ml-3'>
                                        <div className='h-[40]'>
                                            <p className='text-base font-semibold'>Jack Arno</p></div>
                                        <div className='text-xs h-[60%] w-full flex  justify-start items-end pb-1'><p>Online</p></div>
                                    </div>
                                </div>
    
                            </div>
                            <hr className='w-full ' />
    
                            {/* chatting area  */}
    
                            <div className='p-3 w-full h-[75%] overflow-auto'>
                                <p className='bg-[#EBEAEA] p-2 rounded-md text-sm w-fit text-left  mt-4'>Hi, are you free can we talk ? about the
                                    Policies </p>
                                <div className='w-fit text-right ml-auto'>
                                    <p className='bg-[#0F87E4] p-2 block rounded-md text-sm text-white mt-4'>Yes , Sure what’s bothering you ? </p>
                                </div>
    
                            </div>
    
                            <div className='w-full  absolute bottom-0 left-0'>
                                <hr className='w-full ' />
                                <div className='flex items-center justify-between w-full p-3'>
                                    <input type="text" name="" id="" className='w-[70%] py-1 border-none hover:border-none focus:border-none active:border-none outline-none' placeholder='Type your message here...' />
                                    <div className='flex'>
                                        <div className='p-2 bg-[#EBEAEA] w-fit h-fit ml-2 rounded-md'><Image src={upload} alt=""  className='rounded-md'/></div>
                                        <div className='p-2 bg-[#EBEAEA] w-fit h-fit ml-2 rounded-md'><Image src={upload} alt=""  className='rounded-md'/></div>
                                        <div className='p-2 bg-[#EBEAEA] w-fit h-fit ml-2 rounded-md'><Image src={upload} alt=""  className='rounded-md'/></div>
                                        <div className='p-2 bg-[#0F87E4] w-fit h-fit ml-2 rounded-md'><Image src={sendingImg} alt=""  className='rounded-md'/></div>
                                    </div>
                                </div>
                            </div> 
    
    
                        </div>
                        :
                        <div className='w-full md:w-[35%] lg:w-[40%] h-full py-2 md:py-3 overflow-auto' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)", borderRadius: "10px" }}>
                            <h6 className='text-base text-[#0F87E4] font-semibold  mb-3 ml-3'>Inbox</h6>
    
                            <hr className='w-full ' />
    
                            <div className='py-3 md:py-4 cursor-pointer' onClick={showMessage} > 
                                <div className='ml-3 flex justify-start items-center h-[45px] ' >
                                    <Image src={img1} alt="" className='h-full w-auto rounded' />
                                    <div className='h-full ml-3'>
                                        <div className='h-[40]'>
                                            <p className='text-base font-semibold'>Jack Arno</p></div>
                                        <div className='text-xs h-[60%] w-full flex  justify-start items-end pb-1'><p>Hi, are you free can we talk .....</p></div>
                                    </div>
                                </div>
    
                            </div>
    
                            {
                                [...Array(5)].map(a => {
                                    return (
                                        <>
                                            <hr className='w-full ' />
    
                                            <div className='py-3 md:py-4 cursor-pointer ' onClick={showMessage} >
                                                <div className='ml-3 flex justify-start items-center h-[45px] ' >
                                                    <Image src={img1} alt="" className='h-full w-auto rounded' />
                                                    <div className='h-full ml-3'>
                                                        <div className='h-[40]'>
                                                            <p className='text-base font-semibold'>Jack Arno</p></div>
                                                        <div className='text-xs h-[60%] w-full flex  justify-start items-end pb-1'><p>Hi, are you free can we talk .....</p></div>
                                                    </div>
                                                </div>
    
                                            </div>
                                        </>
                                    )
                                })
                            }
    
    
                            <hr className='w-full ' /> 
    
    
                        </div>
                        }
                        </>
                       

                        :
                        <>
                         <div className='w-full md:w-[35%] lg:w-[40%] h-full py-2 md:py-3 overflow-auto' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)", borderRadius: "10px" }}>
                        <h6 className='text-base text-[#0F87E4] font-semibold  mb-3 ml-3'>Inbox</h6>

                        <hr className='w-full ' />

                        <div className='py-3 md:py-4 cursor-pointer' onClick={showMessage} style={{ borderLeft: "3px solid #0F87E4" }}>
                            <div className='ml-3 flex justify-start items-center h-[45px] ' >
                                <Image src={img1} alt="" className='h-full w-auto rounded' />
                                <div className='h-full ml-3'>
                                    <div className='h-[40]'>
                                        <p className='text-base font-semibold'>Jack Arno</p></div>
                                    <div className='text-xs h-[60%] w-full flex  justify-start items-end pb-1'><p>Hi, are you free can we talk .....</p></div>
                                </div>
                            </div>

                        </div> 

                        {
                            [...Array(5)].map(a => {
                                return (
                                    <>
                                        <hr className='w-full ' />

                                        <div className='py-3 md:py-4 cursor-pointer ' onClick={showMessage} >
                                            <div className='ml-3 flex justify-start items-center h-[45px] ' >
                                                <Image src={img1} alt="" className='h-full w-auto rounded' />
                                                <div className='h-full ml-3'>
                                                    <div className='h-[40]'>
                                                        <p className='text-base font-semibold'>Jack Arno</p></div>
                                                    <div className='text-xs h-[60%] w-full flex  justify-start items-end pb-1'><p>Hi, are you free can we talk .....</p></div>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }


                        <hr className='w-full ' /> 


                    </div>


                    <div className='hidden w-full md:block md:w-[60%] lg:w-[55%]  h-full py-2 md:py-3 relative' style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)", borderRadius: "10px" }}>

                        <div className='py-3 md:py-4' style={{}}>
                            <div className='ml-3 flex justify-start items-center h-[45px] ' >
                                <div className='h-full relative'>
                                    <Image src={img1} alt="" className='h-full w-auto rounded' />
                                    <div className='h-[7px] w-[7px] bg-[#3CDC04] absolute bottom-0 right-0' style={{ borderRadius: "50%" }}></div>
                                </div>
                                <div className='h-full ml-3'>
                                    <div className='h-[40]'>
                                        <p className='text-base font-semibold'>Jack Arno</p></div>
                                    <div className='text-xs h-[60%] w-full flex  justify-start items-end pb-1'><p>Online</p></div>
                                </div>
                            </div>

                        </div>
                        <hr className='w-full ' />

                        {/* chatting area  */}

                        <div className='p-3 w-full h-[75%] overflow-auto'>
                            <p className='bg-[#EBEAEA] p-2 rounded-md text-sm w-fit text-left  mt-4'>Hi, are you free can we talk ? about the
                                Policies </p>
                            <div className='w-fit text-right ml-auto'>
                                <p className='bg-[#0F87E4] p-2 block rounded-md text-sm text-white mt-4'>Yes , Sure what’s bothering you ? </p>
                            </div>

                        </div>

                        <div className='w-full  absolute bottom-0 left-0'>
                            <hr className='w-full ' />
                            <div className='flex items-center justify-between w-full p-3'>
                                <input type="text" name="" id="" className='w-[70%] py-1 border-none hover:border-none focus:border-none active:border-none outline-none' placeholder='Type your message here...' />
                                <div className='flex'>
                                    <div className='p-2 bg-[#EBEAEA] w-fit h-fit ml-2 rounded-md'><Image src={upload} alt=""  className='rounded-md'/></div>
                                    <div className='p-2 bg-[#EBEAEA] w-fit h-fit ml-2 rounded-md'><Image src={upload} alt=""  className='rounded-md'/></div>
                                    <div className='p-2 bg-[#EBEAEA] w-fit h-fit ml-2 rounded-md'><Image src={upload} alt=""  className='rounded-md'/></div>
                                    <div className='p-2 bg-[#0F87E4] w-fit h-fit ml-2 rounded-md'><Image src={sendingImg} alt=""  className='rounded-md'/></div>
                                </div>
                            </div>
                        </div> 


                    </div>
                    </>
                    }
                </div>
            </section>

        </div>
    );
};

export default MessageCustomer;