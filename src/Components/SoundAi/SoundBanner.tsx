import React from 'react';
import MusicCard from './MusicPlay';
import { Play } from 'lucide-react';

const SoundBanner = () => {
    return (
        <div
            className='bg-[#0e0e0e]  lg:py-20  py-10 '
        >
            <div className='w-full flex justify-center relative items-center 
            flex-col overflow-hidden
        '>
                <h1 className="text-center justify-start
                    break-words
                ">
                    <span className="text-white lg:text-[190px] md:text-[10rem] text-7xl font-medium font-['Poppins'] lg:leading-[160px]">AI Voice<br />Transform</span><br />
                    <span className="text-white lg:text-[190px] md:text-9xl text-7xl  font-medium font-['Poppins'] lg:leading-[160px]">Reality</span></h1>

                <div className="  relative lg:top-[-16vh] flex 
                
                flex-col lg:flex-row justify-between
                md:justify-around items-center w-full h-1/2 lg:gap-[35%]">

                    <MusicCard />

                    <div className="  relative top-[-8vh]    bg-[#8affff] rounded-[20px] p-4">
                        <div className="text-black text-lg font-medium font-['Plus_Jakarta_Sans']">AI Voice Result</div>
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-[#0e0e0e] rounded-full flex items-center justify-center text-white">
                                <Play size={14} />
                            </div>
                            <div className="flex space-x-1">
                                {[...Array(30)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1 bg-black rounded-[9px] transition-all "h-4 bg-opacity-30"`}
                                        style={


                                            {
                                                animationDelay: `${i * 0.1}s`,

                                                height: `${Math.floor(Math.random() * 2) + 1}rem`
                                            }

                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <h3 className=" relative lg:top-[-10vh]  md:w-[923px] mx-auto  text-center  text-white lg:text-4xl font-normal font-['Plus_Jakarta_Sans'] lg:leading-[52px]">Generate human-like voices with Retro’s AI text-to-speech technology. The best online AI voice generator</h3>





            <div className='lg:w-[90%] mx-auto flex 
            flex-col lg:flex-row
            lg:justify-end gap-10 items-center lg:mt-10 mt-5'>
                <div className=" lg:w-[50%] w-full flex items-center justify-between bg-white shadow-lg rounded-full md:p-4 p-2  mt-5 md:mt-0 ">

                    <div className="flex space-x-[-8px]">
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>


                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 opacity-50 animate-ping"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 opacity-30 animate-pulse"></div>
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
                            <span className="text-pink-500 text-2xl">🎙️</span>
                        </div>
                    </div>


                    <div className="text-right">
                        <p className="md:text-lg  text-sm font-bold text-gray-900">1.7mil+</p>
                        <p className="text-sm text-gray-500">Active Clients</p>
                    </div>
                </div>

                <h1 className="text-white text-[62px] font-medium font-['Plus_Jakarta_Sans'] leading-[43px] flex flex-col gap-1">13,0000+
                    <span className="text-white text-[28px] font-normal font-['Plus_Jakarta_Sans'] leading-[43px]">Voice Generate</span>
                </h1>
            </div>






        </div>
    );
};

export default SoundBanner;