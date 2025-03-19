/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Image from "next/image"
import { QuoteIcon } from "lucide-react"
import { useGSAPTest } from "@/Hook/useGSAPTest"


gsap.registerPlugin(ScrollTrigger)

interface CarouselProps {
    items: any

}

export default function GSAPCarousel({ items }: CarouselProps) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const { carouselRef, itemRefs, } = useGSAPTest(items.length, currentIndex)

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

    const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    const prev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)

    return (
        <div className="relative   overflow-hidden ">
            <div className="flex relative" ref={carouselRef}>
                {items.map((item: { Author: any }, index: number) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (typeof index === 'number') {
                                itemRefs.current[index] = el;
                            }
                        }}

                        className={" min-w-[100%] rounded-[20px]   "}
                    >

                        <div
                            className=' relative  flex shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)] bg-white
                            lg:flex-row flex-col rounded-[20px]
                        justify-between'
                        >
                            <div
                                className='lg:w-[60%] lg:p-14 p-5'
                            >
                                <p className=" text-justify text-[#5b5b5b] lg:text-2xl font-normal font-['Urbanist'] lg:leading-[38px]">Financial planners help people to gain knowledge aboutw toio invest and save their money in the most efficient way ever. Many people all of u across the coun us them Financial planners help people Financial know planners help people Financial planners </p>

                                <h1 className="text-[#0e191e] text-2xl font-bold font-['Urbanist'] capitalize leading-10 my-4">Ronald Richards</h1>
                                <div>

                                </div>
                            </div>

                            <div className="lg:w-[90px] w-10 absolute 
                        lg:top-[40%]

                        top-[70%]
                        flex items-center justify-center
                        
                        right-[21%] lg:h-[90px] h-10 bg-white/50 rounded-full shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]"
                            >
                                <QuoteIcon
                                    className='fill-[#ec4814]'
                                    color="#ec4814" />
                            </div>

                            <div className="w-[300px]  h-[363px] bg-[#d9d9d9] hidden md:block rounded-tr-[20px] rounded-br-[20px]" />
                        </div>






                    </div>

                ))}

            </div>
            <div
                className="flex items-center lg:w-[20%] w-[60%] mx-auto  space-x-4 lg:mt-10 my-5 "
            >


                <Image src="/Arrow.png"
                    onClick={prev}
                    className='cursor-pointer
                                                    hover:scale-110 transition-transform duration-500 ease-in-out
                                                    '
                    alt='arrow' width={100} height={20} />
                <Image src="/Arrow.png"
                    onClick={next}
                    className='cursor-pointer
                                                    transform rotate-180
                                                    hover:scale-110 transition-transform duration-500 ease-in-out
                                                    '
                    alt='arrow' width={100} height={20} />

            </div>

        </div>
    )
}

