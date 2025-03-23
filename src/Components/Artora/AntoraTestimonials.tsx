"use client";

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const testimonials = [
    {
        name: 'Antonio Banderas',
        role: 'Marketing of ZEN Company',
        text: 'The unparalleled creativity and professionalism exceeded our expectations. Their innovative designs and strategic approach transformed our brand, leaving an indelible mark.',
        images: [
            '/images/testimonial1.jpg',
            '/images/testimonial2.jpg',
            '/images/testimonial3.jpg'
        ]
    },
    {
        name: 'Sarah Johnson',
        role: 'CEO of Bright Media',
        text: 'A remarkable team that delivered outstanding branding solutions. Their expertise in design and marketing has significantly boosted our brand recognition.',
        images: [
            '/images/testimonial4.jpg',
            '/images/testimonial5.jpg',
            '/images/testimonial6.jpg'
        ]
    }
];

const AntoraTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { name, role, text, images  } = testimonials[currentIndex];

    useGSAP(() => {
        gsap.fromTo(".testimonial-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 });
        gsap.fromTo(".testimonial-images", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8 });
        gsap.fromTo(".ceo", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5
        });

    }, [currentIndex]);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className='lg:p-12 p-4 mt-10 '>
            <div className='lg:flex justify-between'>
                <h6>/Testimonials</h6>
                <h3 className="text-[#222222] lg:text-[64px] font-extrabold 
                mt-5 lg:mt-0
                lg:leading-[72px] text-2xl lg:w-[90%] w-full testimonial-text lg:min-h-[500px]">
                    {text}
                </h3>
            </div>
            <div className='w-full  mt-10 flex  gap-10 justify-center items-center rounded-[50px] '>
                <div className='flex gap-5 lg:w-[20%]'>
                    <button onClick={prevTestimonial} className="w-10 h-10 bg-[#fefbf6] rounded-full outline outline-1 outline-[#222222] inline-flex justify-center items-center">
                        <ArrowLeft size={20} />
                    </button>
                    <button onClick={nextTestimonial} className="w-10 h-10 bg-[#fefbf6] rounded-full outline outline-1 outline-[#222222] inline-flex justify-center items-center">
                        <ArrowRight size={20} />
                    </button>
                </div>

                <div className=' w-full flex justify-between items-center'>
                    <div className='ceo '>
                        <h5 className="text-[#222222] text-base font-bold">{name}</h5>
                        <h6 className="opacity-75 text-[#222222] lg:text-base font-normal text-sm">{role}</h6>
                    </div>
                    <div className=' hidden lg:flex gap-5 testimonial-images'>
                        {images.map((src, index) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img key={index} src={src} alt="testimonial" className="w-20 h-20 rounded-full border-4 border-[#222222]" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AntoraTestimonials;
