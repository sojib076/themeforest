"use client";

import {useRef } from "react";
import { Paintbrush, Code, Megaphone, } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Paintbrush className="h-8 w-8 text-white" />,
    title: "Prestige Management",
    description:
      "Real estate is a lucrative ind involves the is a buying selling and reproperties. It is a good encompasses residential",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <Code className="h-8 w-8 text-white" />,
    title: "Prestige Management",
    description:
      "Real estate is a lucrative ind involves the is a buying selling and reproperties. It is a good encompasses residential",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-white" />,
    title: "Prestige Management",
    description:
      "Real estate is a lucrative ind involves the is a buying selling and reproperties. It is a good encompasses residential",
    gradient: "from-purple-500 to-indigo-500",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);



 

  useGSAP(() => {
    if (!sectionRef.current || cardRefs.current.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: true,

      },
    });

    cardRefs.current.forEach((card) => {
      tl.fromTo(
        card,
        {
   
          y: 50,
          rotate: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          rotate: 0,
          
          ease: "power3.out",
          
        },
        
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" 
        grid grid-cols-1 md:grid-cols-3 gap-4
      relative z-20 lg:py-[120px] py-10 px-4 md:px-16  bg-gray-50"
    >


      {
        services.map((service, index) => {
          const { icon, title, description } = service;
          return (
            <div
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
             
              
            key={index} className="lg:w-[410px] w-[95%] h-[350px]  rounded-[20px] p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              
              <div className="absolute right-0 top-0 -translate-y-1/2 pointer-events-none">
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-5"
                >
                  <circle cx="90" cy="90" r="90" fill="currentColor" />
                </svg>
              </div>

              {/* Chat Icon */}
              {icon}

              {/* Content */}
              <div className="space-y-4 relative">
                <h2 className="text-[32px] font-semibold text-gray-900">{title}</h2>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {description}
                </p>

                <a href="#" className="inline-flex items-center text-[#FF4D1C] hover:opacity-90 font-medium mt-4">
                  MORE ABOUT
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })
      }
    </section>
  );
}
