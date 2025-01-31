"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {  useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
    const containerref = useRef(null);
    const circle = useRef(null);
    const textref = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerref.current,
                start: "53% 50%", 
                scrub: true,

            }
        });
        tl.to(textref.current, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 'a')
        
        tl.to(circle.current, {

            scale: 3.5,
            background: '#FFFAF0',
            duration: 1,


        }, 'a')

    });

    return (
        <div>
            <div 
            ref={containerref}
            className=" relative z-10  lg:h-[900px] h-[600px] overflow-hidden  
            shrink-0 bg-[linear-gradient(180deg,rgba(255,250,240,0)_0%,#FFFAF0_100%)]
                
            ">
                <div
                    className='flex 
            lg:flex-row
                        flex-col
                    justify-between h-full lg:px-20 lg:py-10 p-2 '>
                    <div
                        className="lg:flex flex-col justify-between"
                    >
                        <div className="w-52 h-52 lg:relative lg:left-[-200px]  bg-[#ec4814] rounded-full blur-[100px]" />
                        <div className='hidden lg:flex flex-col justify-between'>
                            <div className="w-52 h-52  hidden lg:relative left-[-150px]  bg-[#ec4814] rounded-full blur-[100px]" />
                            <div className="w-52 h-52 hidden lg:relative left-[-100px]  bg-[#ec4814] rounded-full blur-[100px]" />
                            <div className="w-52 h-52 hidden lg:relative left-[-100px]  bg-[#ec4814] rounded-full blur-[100px]" />
                            <div className="w-52 h-52  hidden lg:relative   bg-[#ec4814] rounded-full blur-[100px]" />
                        </div>
                    </div>
                    <div className=" relative lg:left-0 left-2  ">
                        <div
                            ref={textref}
                        className=" text-center px-1 lg:px-0">
                            <span

                            className="text-[#0e191e] lg:text-[80px] text-5xl font-light font-['Urbanist'] capitalize lg:leading-[81px]">Revolutionize Your Mobile </span><span className="text-[#0e191e] lg:text-[80px] text-5xl font-extrabold font-['Urbanist'] capitalize lg:leading-[81px]">with State Software</span></div>

                        <div className="lg:size-[1000px] size-[350px] rounded-full border border-[#ec4814] absolute   lg:top-[30%] lg:right-[-5%]" />
                        <div
                            ref={circle}
                        className="
                            
                        lg:size-[600px] size-72 bg-[#ec4814] rounded-full absolute  mt-10 left-8 lg:bottom-[-30%] lg:left-[20%] " />
                    </div>
                    <div
                        className="flex flex-col justify-between"
                    >

                        <div className="w-52 h-52 bg-[#ec4814] rounded-full blur-[150px]" />
                        <div className="w-52 h-52 bg-[#ec4814] rounded-full blur-[150px]" />

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Herosection;