"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAPTest } from "@/Hook/useGSAPTest";
import useIsMobile from "@/Hook/useIsMobile";

const awards = [
  { year: "2023", title: "Golden Creativity Award" },
  { year: "2022", title: "Digital Innovation Summit" },
  { year: "2021", title: "Global IT Agency Award", gray: true },
  { year: "2020", title: "Visual Web Arts Showcase" },
  { year: "2019", title: "Innovative UI/UX Design" },
  { year: "2018", title: "Best Tech Startup Award" },
];

const AwardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { carouselRef, itemRefs } = useGSAPTest(awards.length, currentIndex);

const isMobile = useIsMobile();


  useEffect(() => {
    
    itemRefs.current.forEach((item, ) => {
      if (item) {
        gsap.from(item, {
          y: 50,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            toggleActions: "play none none reverse",
            markers: true,
          },

        });

      }
    });
  }, [itemRefs]);

  const nextAward = () => {
    const totalSlides = isMobile ? awards.length : Math.ceil(awards.length / 4);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );

  };

  const prevAward = () => {
    const totalSlides = isMobile ? awards.length : Math.ceil(awards.length / 4);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );

  };

  return (
    <div className="lg:p-10 p-5 overflow-hidden mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="lg:text-5xl text-3xl font-extrabold text-[#222]">
          OUR AWARDS
        </h2>
        <div className="flex gap-4">
          <button
            onClick={prevAward}
            className="w-8 h-8 bg-[#f6f1ed] rounded-full flex justify-center items-center"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={nextAward}
            className={`w-8 h-8 bg-[#f6f1ed] rounded-full flex justify-center items-center `}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          
          className=  {`"
          
          
          
          flex lg:gap-6 transition-transform ease-out duration-700
          
          
          "`}
          style={{
            transform: `translateX(-${currentIndex * (100 / awards.length)}%)`, 
          }}
        >
          {awards.map((award, idx) => (
            <div
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className={` 

                ${idx % 2 !== 0 ? 'lg:mt-10' : ''}

                lg:min-w-[350px] lg:h-80 h-72 lg:w-auto min-w-[100%]   lg:p-6 p-3 rounded-[20px] flex flex-col items-start gap-20 transform transition-opacity duration-700 ease-in-out ${award.gray ? "bg-gray-300 text-white" : "bg-[#f6f1ed] text-[#222]"
                }`}
            >
              <div className="opacity-75 text-base font-normal">/ {award.year}</div>
              <div className="lg:text-5xl text-3xl font-extrabold lg:leading-[56px]">
                {award.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
