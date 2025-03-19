"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const ArtoraBanner = () => {

    const containerref = useRef(null);
    const textref = useRef(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    

    const handleClick = () => {
        gsap.fromTo(
            buttonRef.current,
            { scale: 1 },
            {
                scale: 1.2,
                duration: 0.2,
                ease: "power1.out",
                yoyo: true,
                repeat: 1,
            }
        );
    };
    useGSAP(() => {
        gsap.fromTo(
            textref.current,
            { scale: 3.5 },
            { scale: 1, duration: 1, ease: "power3.out" }
        );

    });

    useGSAP(() => {
        gsap.fromTo(
            ".BannerVideo",
            { scale:.7 },
            {
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".BannerVideo",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                   
                },
            }
        );
    });



    return (
        <div ref={containerref} className='lg:px-10 lg:p-12 p-3  overflow-hidden'>
            <div className='flex  justify-between gap-5 ' >
                <h1 className="artoraHeading lg:text-[200px] text-5xl lg:leading-[200px]">Artistic</h1>
                <h1 className="lg:w-[25%] w-full lg:text-xl lg:leading-[30px] text-sm antoraPara">We redefine creative possibilities, ensuring your brand stands at the forefront of design<br />uniqueness and excellence.</h1>
            </div>
            <div
                className='flex 
            gap-3
            lg:flex-row
            flex-col
            lg:items-end
            '
            >
                <h1
                    ref={textref}


                    className="  lg:text-[160px] lg:leading-[160px] text-5xl jakarta ">GATEWAY TO</h1>

                <button className=" 
            
            w-[150px] h-[40px]
            lg:w-[300px] lg:h-[60px]
            
            rounded-3xl
            
        bg-[#222222] text-white text-sm "
                    onClick={handleClick}
                    ref={buttonRef}
                >EXPLORE</button>


            </div>
            <h1 ref={textref} className="  lg:mt-0 lg:text-[160px] font-extrabold text-[35px] lg:leading-[160px]  jakarta">LIMITLESS DESIGN</h1>

            <div className=" BannerVideo relative z-50 w-[100%] lg:h-[637px] h-[400px] mt-10 bg-[#d9d9d9] rounded-[50px] inline-flex flex-col justify-center items-center">
                <div className="w-[100px] h-[100px] bg-[#fefbf6] rounded-[100px] inline-flex justify-center items-center" >
                    <Play size={50} />
                </div>
            </div>
            

        </div>
    );
};

export default ArtoraBanner;