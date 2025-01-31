"use client";
import React, { useState } from 'react';
import GSAPCarousel from './GSAPCarousel';
import Image from 'next/image';

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselItems = [
      
        {
            Name: "Project 1",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, sapien nec.",
            Image: "https://images.unsplash.com/photo-1631900123724-6f3b4b6b3c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
        },{
            Name: "Project 2",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, sapien nec.",
            Image: "https://images.unsplash.com/photo-1631900123724-6f3b4b6b3c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
        },{
            Name: "Project 3",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, sapien nec.",
            Image: "https://images.unsplash.com/photo-1631900123724-6f3b4b6b3c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Author : "Author"
            
        },{
            Name: "Project 4",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, sapien nec.",
            Image: "https://images.unsplash.com/photo-1631900123724-6f3b4b6b3c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
        },{
            Name: "Project 5",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, sapien nec.",
            Image: "https://images.unsplash.com/photo-1631900123724-6f3b4b6b3c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            
        },{
            Name: "Project 6",
            Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, sapien nec.",
            Image: "https://images.unsplash.com/photo-1631900123724-6f3b4b6b3c8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ]
  
    const totalSlides = Math.ceil(carouselItems.length / 1)
  
    const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    const prev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
    return (
        <div 
        className=' h-auto bg-blue-400 '
        >
            <div className="lg:pt-[80px] lg:pb-5 py-8 h-[620px]    bg-[#0e191e]" >

                <div
                    className='lg:w-[75%] w-[90%] mx-auto lg:flex items-center justify-between py-5 '
                >
                    <div>
                        <h6 className="text-[#ec4814] lg:text-xl text-sm font-bold font-['Urbanist'] capitalize leading-[25px]">Recent Projects</h6>
                        <h2 className="lg:w-[573px] text-white lg:text-[40px] text-xl font-black font-['Urbanist'] capitalize lg:leading-[44.80px]">Reach New Heights with Digital Marketing</h2>
                    </div>

                    <div
                        className="flex items-center justify-between space-x-4 lg:mt-0 my-5"
                    >

    
                            <Image src="/arrow.png"
                                className='cursor-pointer
                                hover:scale-110 transition-transform duration-500 ease-in-out
                                '
                            alt='arrow' width={100} height={20} onClick={prev} />
                            <Image src="/arrow.png"
                                className='cursor-pointer
                                transform rotate-180
                                hover:scale-110 transition-transform duration-500 ease-in-out
                                '
                            alt='arrow' width={100} height={20} onClick={next} />
                        
                    </div>
                </div>



                <div
                    className='lg:w-[95%] mx-auto  relative top-0 left-0 right-0 bottom-0'
                >
                     <GSAPCarousel items={carouselItems} currentIndex={currentIndex} />
                </div>
            </div>


        </div>
    );
};

export default Projects;