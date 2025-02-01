import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Price = () => {
    return (
        <div
            className=' lg:pt-60  pt-52 relative'
        >
            <h1 className="text-[#ec4814] text-sm font-bold font-['Urbanist'] capitalize leading-[25px] text-center">Our Pricing</h1>
            <h1 className=" lg:w-[530px] w-[80%] mx-auto text-center text-[#0e191e] lg:text-[40px] text-xl font-black font-['Urbanist']
             capitalize lg:leading-[44.80px]">
                Drive Growth Through Digital the and Marketing</h1>

            <div
                className='lg:mt-14 mt-5
                grid grid-cols-1 lg:grid-cols-3 gap-4 
                lg:w-[80%] w-[90%] mx-auto relative overflow-hidden
                '
            >
                {
                    [1, 2, 3].map((item, index) => (
                        <div key={index}>
                            <div className="   bg-gray-100 rounded-2xl lg:p-10 p-8 " >
                                <div className='flex justify-between items-center'>
                                    <h1 className="text-[#0e191e] text-[32px] font-black font-['Urbanist'] capitalize leading-[44.80px]">Basic</h1>
                                    <div>
                                        <span className="w-[71px] text-center text-[#0e191e] text-[40px] font-black font-['Urbanist'] capitalize leading-[44.80px]">$29</span><span className="text-[#5b5b5b] text-lg font-normal font-['Urbanist'] leading-7">/month</span>
                                    </div>
                                </div>
                                <div
                                    className='flex flex-col items-center mt-5 lg:mt-0'
                                >
                                    <Image src='/Mobile-bro.png' width={150} height={150} alt='price1' />
                                </div>

                                <hr
                                    className='my-5 b border-1 opacity-30 border border-[#5b5b5b]'
                                />
                                {/* list of Services  */}
                                <ul
                                    className='space-y-4'
                                >
                                    {
                                        ['Knew About Fonts', 'Your Startup', 'Mistakes To Avoid', 'Your Startup'].map((item, index) => (
                                            <li key={index} className='flex items-center space-x-4'>
                                                <Check
                                                    className=' size-4
                                        
                                       
                                            bg-black  rounded-full text-white
                                        '
                                                />
                                                <span className="text-gray-600 text-lg font-normal font-['Urbanist'] leading-7">{item}</span>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <button
                                    className={`mt-10
                                            hover:bg-[#ec4814] hover:text-white transition-all duration-500 ease-in-out

                                            hover:scale-105
                                        lg:w-[330px] w-[100%] text-[#0e191e] text-[15px] font-bold font-['Urbanist'] uppercase 
              leading-[15px] h-[60px] px-[30px] py-5 rounded-full border-2
              ${index === 1 ? "bg-[#ec4814] border-[#ec4814]" : "border-[#000]"}`}
                                >
                                    Start now
                                </button>


                            </div>
                        </div>
                    ))
                }



            </div>

        </div>
    );
};

export default Price;