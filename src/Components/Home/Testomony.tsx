import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Testomony = () => {
    return (
        <div className="relative lg:pt-[100px] mt-52 lg:mt-0 py-10 px-4 md:px-16">
            <div className="lg:h-[653px] h-40 bg-[#eeeeee] rounded-[20px] relative">
                <div className="
            absolute bottom-[-5%] left-1/2 transform -translate-x-1/2
          
            w-[90%] lg:h-[363px] mx-auto bg-white rounded-[20px]  shadow-[0px_0px_60px_0px_rgba(0,0,0,0.05)]"
                >
                    <div
                        className=' relative  flex
                            lg:flex-row flex-col
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
                    <div
                        className="flex items-center w-[20%] mx-auto  space-x-4 lg:mt-10 my-5"
                    >


                        <Image src="/Arrow.png"
                            className='cursor-pointer
                                                    hover:scale-110 transition-transform duration-500 ease-in-out
                                                    '
                            alt='arrow' width={100} height={20} />
                        <Image src="/arrow.png"
                            className='cursor-pointer
                                                    transform rotate-180
                                                    hover:scale-110 transition-transform duration-500 ease-in-out
                                                    '
                            alt='arrow' width={100} height={20} />

                    </div>

                </div>
            </div>

        </div>

    );
};

export default Testomony;