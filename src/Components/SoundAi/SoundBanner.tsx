import React from 'react';
import MusicCard from './MusicPlay';
import { Play } from 'lucide-react';

const SoundBanner = () => {
    return (
        <div
            className='bg-[#0e0e0e] '
        >
            <div className='w-full flex justify-center relative items-center 
            flex-col pt-20 overflow-hidden
        '>
            <div className="text-center justify-start">
                <span className="text-white lg:text-[190px] md:text-[10rem] text-4xl font-medium font-['Poppins'] lg:leading-[160px]">AI Voice<br />Transform</span><br/>
                <span className="text-white lg:text-[190px] md:text-9xl text-4xl  font-medium font-['Poppins'] lg:leading-[160px]">Reality</span></div>

            <div className="  relative lg:top-[-16vh] flex justify-around items-center w-full h-1/2 lg:gap-[35%]">

                <MusicCard />
                
                <div className="  relative top-[-8vh]    bg-[#8affff] rounded-[20px] p-4">
                    <div className="text-black text-lg font-medium font-['Satoshi']">AI Voice Result</div>
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
        <h3 className=" relative top-[-10vh]md:w-[923px] mx-auto  text-center  text-white text-4xl font-normal font-['Plus_Jakarta_Sans'] leading-[52px]">Generate human-like voices with Retro’s AI text-to-speech technology. The best online AI voice generator</h3>
        
    
        </div>
    );
};

export default SoundBanner;