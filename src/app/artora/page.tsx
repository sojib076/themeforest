
import AntoraAbout from '@/Components/Artora/AntoraAbout';
import AntoraPortfolio from '@/Components/Artora/AntoraPortfolio';
import AntoraStartProjects from '@/Components/Artora/AntoraStartProjects';
import AntoraTestimonials from '@/Components/Artora/AntoraTestimonials';
import ArtoraBanner from '@/Components/Artora/artoraBanner';
import ArtoraServices from '@/Components/Artora/artoraServices';
import React from 'react';

const Artora = () => {
    return (
        <div>
            <ArtoraBanner />
            <ArtoraServices />
            <AntoraAbout />
            <AntoraPortfolio/>
            <AntoraTestimonials />
            <AntoraStartProjects />
        </div>
    );
};

export default Artora;