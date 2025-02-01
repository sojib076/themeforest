/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAPCarousel } from "@/Hook/useGSAPCarousel"


gsap.registerPlugin(ScrollTrigger)

interface CarouselProps {
    items: any
    currentIndex: number
}

export default function GSAPCarousel({ items, currentIndex }: CarouselProps) {
    const { carouselRef, itemRefs, totalSlides, isMobile } = useGSAPCarousel(items.length, currentIndex)

    useEffect(() => {
        itemRefs.current.forEach((item, index) => {
            if (item) {
                gsap.from(item, {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "power3.out",
                    scrub: true,
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse",
                    },
                })
            }
        })
    }, [itemRefs])

    return (
        <div className="relative  overflow-hidden">
            <div className="flex" ref={carouselRef}>
                {items.map((item: { Author: any }, index: number) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (typeof index === 'number') {
                                itemRefs.current[index] = el;
                            }
                        }}
                        className={`${isMobile ? " gap-5 flex-[0_0_100%] min-w-full" : "flex-[0_0_25%] min-w-[25%]"} px-2`}
                    >
                        <div className=" h-[500px] bg-[#d9d9d9] rounded-[20px]

                            flex items-center 
                        
                        
                        " >


                           {
                            item?.Author && (
                                <div className="
                                absolute
                                bottom-4
                                px-4
                                w-[300px] 
                                    p-4
                                bg-white rounded-tr-[20px] rounded-br-[20px] border-r-4 pl-4 border-[#ec4814]" >
                                    <h1 className="text-[#0e191e] text-xl font-bold font-['Urbanist'] capitalize leading-10">App Launcher</h1>
                                    <h2 className="text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">Software Develop</h2>
                                </div>
                            )
                           }

                        </div>

                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
                    />
                ))}
            </div>
        </div>
    )
}

