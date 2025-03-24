"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AntoraAbout = () => {
    const containerRef = useRef(null);
    const textRef = useRef<HTMLHeadingElement | null>(null);
    const storiesRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 50%",
                end: "bottom 110%",
                scrub: 1,
        
            
               


            }
        });

    



        const text = textRef.current;

        const textSplit = text?.textContent?.split('')


        if (textSplit) {
            if (text) {
                text.innerHTML = '';
                textSplit.forEach((char,) => {
                    text.innerHTML += `<span style="display:inline-block; opacity:0" class="char">${char}</span>`;
                });
            }

            const chars = text?.querySelectorAll('.char');

            if (!chars) return;

            tl.fromTo(chars, {

                y: 1000,




            }, {
                y: 1,
                opacity: 1,

                ease: 'bounce.inOut',

                duration: 0.1, stagger: 0.1
            },'a')


        }

        tl.fromTo(storiesRef.current, {
            
            y: 1000,
            opacity: 0

        }, {
            y: 0,
            opacity: 1,
          
            ease: 'bounce.inOut',
            duration: 0.4,
            stagger: 0.1

        })
 
    });



    console.log('AntoraAbout');
    return (
        <div
            ref
            ={containerRef}
            className=' lg:p-12 p-3   overflow-hidden mt-20 lg:mt-0 '
        >
            <div
                className='flex flex-row justify-between  items-start'>

                <h1
                    className="  overflow-hidden lg:mt-10 justify-start w-[80%] lg:w-[60%]  text-[#222222] lg:text-[64px] text-3xl font-extrabold font-['Plus_Jakarta_Sans'] lg:leading-[72px]">PASSIONATE CREATIVES FOR YOUR

                    <span ref={textRef} className="
                     text-[#222222] lg:text-[90px] ml-4 text-4xl font-normal font-['Pinyon_Script'] lg:leading-[88px] overflow-hidden">brand.</span>
                </h1>

                <div>
                    <h6 className="opacity-75 text-right justify-start text-[#222222] text-base font-normal font-['Inter'] leading-normal">/  about us</h6>
                </div>
            </div>

            {/* our Stories  */}
            <div
                ref={storiesRef}
            
                className="  flex flex-col gap-5 lg:flex-row justify-between items-start lg:mt-[55px]"
            >

                <div className="   lg:w-[685px] w-full lg:h-[344px] h-52  bg-[#d9d9d9] rounded-[50px]" />

                <div className="flex lg:items-end   flex-col gap-5 lg:gap-32 mt-1 lg:mt-0">
                    <div
                        className="flex justify-between gap-5 mt-5  "
                    >

                        <h1 className="px-10 py-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#222222] ">Our Stories </h1>

                        <div className="w-10 p-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#222222] inline-flex justify-center items-center">
                            <span className="justify-start text-[#222222] text-base font-normal font-['Inter'] leading-normal">+</span>
                        </div>
                    </div>



                    <div

                    >
                        <p className=" lg:w-[575px]  text-[#222222] text-xl font-normal font-['Inter'] leading-[30px]"
                        >At ARTIQUE, we merge imagination with expertise, creating captivating
                            designs and strategies that resonate. Our grand mission is to transform
                            your brand into an unforgettable masterpiece of a branding design.</p>

                        <Link
                            className="text-[#222222]  font-bold font-['Inter'] leading-[30px] mt-5"
                            href="#">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AntoraAbout;