
import React from 'react';
import TestCarousel from './TestCarousel';

const Testomony = () => {
    

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
        },
    ]    
    return (
        <div className="relative lg:pt-[100px] lg:mt-0 py-10 px-4 md:px-16">
            <div className="lg:h-[653px] h-[400px]  bg-[#eeeeee] rounded-[20px] relative ">
            <div className='absolute bottom-[-20%] w-[90%] left-[5%] mx-auto rounded-3xl '>
            <TestCarousel items={carouselItems}  />
            </div>
            
        
            </div>

        </div>

    );
};

export default Testomony;