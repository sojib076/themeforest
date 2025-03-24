import { ArrowRight, Play } from 'lucide-react';

import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const SoundVoice = () => {
    return (
        <div className='my-28'>
            <h1 className=" text-center  text-black md:text-7xl text-5xl
             font-semibold font-['Poppins'] md:leading-[75px]">Create Professional Voice</h1>
            <p className="text-center text-black text-[25px] font-medium font-['Satoshi'] ">Wow your audience with AI voices in 100+ languages.</p>

            <div
                className=' flex my-5 overflow-hidden gap-5'
            >
                {/* {
                    Array(5).fill(0).map((_, i) => (
                        <div
                            key={i}
                            className=" w-[314px] h-[70px] flex items-center justify-around p-2 bg-white rounded-[50px] shadow-[0px_20px_40px_0px_rgba(39,21,68,0.03)] border border-[#dedede]" >

                            <div className="size-[55px]  " >
                                <Image
                                    src={'/Cta.png'}
                                    alt='cta'
                                    width={1080}
                                    height={55}

                                    className='
    rounded-full
                            size-[55px]
    
                            '

                                />
                            </div>
                            <h6 className="text-center justify-start text-black text-[20px] font-medium font-serif leading-[48px]">William Campbell</h6>
                            <Play

                                size={20}
                            ></Play>

                        </div>
                    ))
                } */}

                <ScrollAnimation/>
            </div>

            <div className=" w-fit mx-auto text-center text-black text-[28px] font-semibold font-['Poppins'] leading-[48px]
                flex items-center gap-2
border-b-2
                border-black

            ">Generate Voice
                <span>
                    <ArrowRight
                        size={35}
                    />
                </span>
            </div>
        </div>
    );
};

export default SoundVoice; 