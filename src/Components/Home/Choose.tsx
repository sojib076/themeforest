"use client"
import { useGSAP } from '@gsap/react';
import { Check, } from 'lucide-react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Choose = () => {


    const containerref = useRef(null);
    const imageref = useRef(null);
    const textref = useRef(null);


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerref.current,
                start: "top 50%",
                end: "53% 50%",
                scrub: true,

            }
        });


        tl.fromTo(imageref.current, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            duration: 1
        }, 'a')

        tl.fromTo(textref.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 'a')










    });

    return (

        <div
            ref={containerref}
            className='lg:py-[120px]  py-10 px-4 md:px-16 
        '
        >
            <div
                className='lg:flex 
                    justify-between
                h-full w-full'
            >

                <div
                    className='max-w-[700px] w-full'
                >
                    <h3 className="text-[#ec4814] lg:text-xl text-sm font-bold font-['Urbanist'] capitalize leading-[25px] mt-5 lg:mt-0">Know About Us</h3>
                    <h3
                        ref={textref}
                        className="max-w-[629px] lg:py-5 py-3 text-[#0e191e] lg:text-[40px] text-xl font-black font-['Urbanist'] capitalize lg:leading-[44.80px]">The Future of Mobile Software Unleash Your Mobile </h3>
                    <p className="max-w-[545px] text-justify lg:pb-10 pb-3 text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">Et purus duis sollicitudin dign habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus Urna fusce Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis</p>
                    {
                        [1, 2].map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center  space-x-1
                        
                        py-2'
                            >
                                <Check size={20}
                                    className='text-[#ec4814]
                                    font-bold
                                '
                                />
                                <p className="text-[#0e191e] text-sm font-bold font-['Urbanist'] capitalize leading-[30px]">Et purus duis sollicitudin dignissim habitant</p>



                            </div>
                        ))
                    }

                </div>
                <div
                    ref={imageref}
                    className='lg:w-[600px] w-[100%] lg:h-[508px] h-[300px] shrink-0  bg-black/30 rounded-[20px]'
                >

                </div>




            </div>

        </div>





    );
};

export default Choose

