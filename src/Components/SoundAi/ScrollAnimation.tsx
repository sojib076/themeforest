"use client"

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Assuming you're using Next.js
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const logoRef =  useRef<HTMLDivElement>(null); 
  const secondlogo = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoRef.current,
       
        scrub: 1,
        markers: true,
      },
    });

    // Synchronize the animation for each div
    tl.fromTo(
      logoRef.current, 
      {
        x: 0,
      },
      {
        x: 380,
        duration: 1,
        stagger: 0.6,
       
      }
    );

    tl.fromTo(
      secondlogo.current,
      {
        x: 0,
      },
      {
        x: -580,
        duration: 1,
        stagger: 0.6,
      }
    );

  });

  return (
   <div>
     <div
      ref={logoRef}
      className='flex my-5 overflow-hidden gap-5 '
    >
      {
        Array(6).fill(0).map((_, i) => (
          <div
            key={i}
            className="w-[314px] h-[70px] 
            flex items-center justify-around p-2
            bg-white rounded-[50px] shadow-[0px_20px_40px_0px_rgba(39,21,68,0.03)]
            border border-[#dedede]"
          >
            <div className="size-[55px]">
              <Image
                src={'/Cta.png'}
                alt='cta'
                width={1080}
                height={55}
                className='rounded-full size-[55px]'
              />
            </div>
            <h6 className="text-center justify-start text-black text-[20px] font-medium font-serif leading-[48px]">
              William Campbell
            </h6>
          </div>
        ))
      }
    </div>
    <div
    ref={secondlogo}
     className='flex my-5 overflow-hidden gap-5 mb-52'
    >
    {
        Array(6).fill(0).map((_, i) => (
          <div
            key={i}
            className="w-[314px] h-[70px] 
            flex items-center justify-around p-2
            bg-white rounded-[50px] shadow-[0px_20px_40px_0px_rgba(39,21,68,0.03)]
            border border-[#dedede]"
          >
            <div className="size-[55px]">
              <Image
                src={'/Cta.png'}
                alt='cta'
                width={1080}
                height={55}
                className='rounded-full size-[55px]'
              />
            </div>
            <h6 className="text-center justify-start text-black text-[20px] font-medium font-serif leading-[48px]">
              William Campbell
            </h6>
          </div>
        ))
      }
    </div>
   </div>
  );
}

export default ScrollAnimation;
