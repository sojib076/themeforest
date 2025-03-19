"use client"
import { useGSAP } from '@gsap/react';
import { Check, } from 'lucide-react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {


    const containerref = useRef(null);
    const imageref = useRef(null);
    const textref = useRef(null);
    const companiesref = useRef<HTMLDivElement>(null);
    const companyItemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

   

       const companytl = gsap.timeline({
              scrollTrigger: {
                trigger: companiesref.current,
                start: "top 80%",
                end: "60% 80%",
                scrub: true,

              }
       })



    companyItemRefs.current.forEach((el, index) => {
        if (el) {
          companytl.fromTo(
            el,
            { opacity: 0, x: -100 }, 
            { opacity: 1, x: 0, duration: 1 },
            index * 0.2 
          );
        }
      });
    }, []);



    

    




    return (
       <div>
         <div
            ref={containerref}
            className='lg:pt-[100px]  py-10 px-4 md:px-16 
        '
        >
            <div
                className='lg:flex 
                    justify-between
                h-full w-full'
            >
                <div
                    ref={imageref}
                    className='lg:w-[600px] w-[100%] lg:h-[508px] h-[300px] shrink-0  bg-black/30 rounded-[20px]'
                >

                </div>

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


            </div>

        </div>

        
        <div

            className='   px-4 md:px-16'
        > 
        <div    
        ref={companiesref}
            className='
            grid grid-cols-4 lg:gap-7 gap-2 w-full h-full lg:mt-20 mt-10 lg:mb-20 mb-10
          
            '
        > 
        {[1,2,3,4,5,6,7,8].map((item,index)=>(
           
            <div
            ref={(el) => {
                companyItemRefs.current[index] = el;
            }}

                
                
                key={index}
                className=' w-[100%] lg:h-[103px] h-[100px] bg-black/30 rounded-[20px] mx-2'
            >
            </div>
        ))}

        </div>
            
        </div>
       </div>
    );
};

export default AboutUs

    ;