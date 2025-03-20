"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

const awards = [
    { year: '2023', title: 'Golden Creativity Award' },
    { year: '2022', title: 'Digital Innovation Summit' },
    { year: '2021', title: 'Global IT Agency Award', gray: true },
    { year: '2020', title: 'Visual Web Arts Showcase' },
    { year: '2019', title: 'Innovative UI/UX Design' },
    { year: '2018', title: 'Best Tech Startup Award' }
];

const AwardsSection = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleAwards = 4;
    const awardsRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            awardsRef.current,
            { opacity: 0, x: 20 },
            {
              opacity: 1,
              y: 0,
              x: 0,
              stagger: 0.05,
              duration: 0.4,
              ease: "power2.out",
            },
        );
    }, [startIndex]);

    const nextAward = () => {
        setStartIndex((prev) => (prev + 1) % awards.length);
    };

    const prevAward = () => {
        setStartIndex((prev) => (prev - 1 + awards.length) % awards.length);
    };

    return (
        <div className="lg:p-10 p-5 overflow-hidden mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="lg:text-5xl  text-3xl font-extrabold text-[#222]">OUR AWARDS</h2>
                <div className="flex gap-4">
                    <button onClick={prevAward} className="w-8 h-8 bg-[#f6f1ed] rounded-full flex justify-center items-center">
                        <ArrowLeft size={16} />
                    </button>
                    <button onClick={nextAward} className="w-8 h-8 bg-[#f6f1ed] rounded-full flex justify-center items-center">
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
            <div className="relative w-full overflow-hidden">
                <div ref={awardsRef} className="flex gap-6 transition-transform ease-out duration-700">
                    {awards.slice(startIndex, startIndex + visibleAwards).map((award, idx) => (
                        <div
                            key={idx}
                            className={`
                                ${idx % 2 !== 0 ? 'lg:mt-10' : ''}
                                lg:w-80 min-w-[350px] h-80 lg:p-6 p-3 rounded-[20px] flex flex-col justify-start items-start gap-20 transition-opacity duration-700 ease-in-out transform ${
                                award.gray ? 'bg-gray-300 text-white' : 'bg-[#f6f1ed] text-[#222222]'
                            }`}
                        >
                            <div className="opacity-75 text-base font-normal font-['Inter']">/ {award.year}</div>
                            <div className="lg:text-5xl text-4xl font-extrabold font-['Plus_Jakarta_Sans'] lg:leading-[56px]">{award.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AwardsSection;
