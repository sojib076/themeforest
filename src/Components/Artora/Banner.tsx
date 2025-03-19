import React from 'react';

const Banner = () => {
    return (
        <div className='lg:px-10 lg:p-12 p-4'>
        <div className='flex  justify-between gap-5 ' >
            <h1 className="artoraHeading lg:text-[200px] text-5xl lg:leading-[200px]">Artistic</h1>
            <h1 className="lg:w-[25%] w-full lg:text-xl lg:leading-[30px] text-sm antoraPara">We redefine creative possibilities, ensuring your brand stands at the forefront of design<br />uniqueness and excellence.</h1>
        </div>
        <div
            className='flex 
            gap-3
            lg:flex-row
            flex-col
            lg:items-end
            '
        >
            <h1 className="  lg:text-[160px] lg:leading-[160px] text-5xl jakarta ">GATEWAY TO</h1>

            <button className=" 
            
            w-[150px] h-[40px]
            lg:w-[300px] lg:h-[60px]
            
            rounded-3xl
            
        bg-[#222222] text-white text-sm ">EXPLORE</button>


        </div>
        <div className="  lg:mt-0 lg:text-[160px] font-extrabold text-[38px] lg:leading-[160px]  jakarta">LIMITLESS DESIGN</div>
    </div>
    );
};

export default Banner;