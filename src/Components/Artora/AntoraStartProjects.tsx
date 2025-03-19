import Link from 'next/link';
import React from 'react';

const AntoraStartProjects = () => {
    return (
        <div
            className=' mt-16 lg:p-12 p-3  overflow-hidden'

        >
            <div
                className=' lg:h-[684px] h-[500px] bg-[#222222]  rounded-3xl flex flex-col justify-center items-center'
            >
                <h6 className=" text-center  text-[#fefbf6] lg:text-[160px] font-extrabold 
                    font-['Plus_Jakarta_Sans'] lg:leading-[160px] lg:text-6xl text-5xl">BEGIN YOUR</h6>
                <h1 className=" text-center j text-[#d9d9d9] lg:text-[200px] text-5xl font-normal font-['Pinyon_Script'] lg:leading-[200px]">Creative</h1>

                <h6 className="text-center text-[#fefbf6] lg:text-[160px] text-4xl font-extrabold font-['Plus_Jakarta_Sans'] lg:leading-[160px]">JOURNEY NOW</h6>
                <div 
                className="flex  justify-center items-center gap-5  mt-10"
                >
                <button className=" w-[150px] h-[40px] lg:w-[300px] lg:h-[60px] rounded-full bg-[#fefbf6] text-[#222222] font-bold 
                lg:text-xl
                text-sm ">

                    START PROJECTS

                </button>
               
                    <Link href={'#'} className="justify-start 
                    text-[#fefbf6] lg:text-base font-bold font-['Inter'] text-sm leading-normal underline">LEARN MORE ABOUT US</Link>
             
                </div>
            </div>
        </div>
    );
};

export default AntoraStartProjects;