
import AntoraAbout from '@/Components/Artora/AntoraAbout';
import AwardsSection from '@/Components/Artora/AntoraAwards';
import AntoraPortfolio from '@/Components/Artora/AntoraPortfolio';
import AntoraStartProjects from '@/Components/Artora/AntoraStartProjects';
import AntoraTestimonials from '@/Components/Artora/AntoraTestimonials';
import ArtoraBanner from '@/Components/Artora/artoraBanner';
import ArtoraServices from '@/Components/Artora/artoraServices';
import React from 'react';
import ArtFooter from '@/Components/Artora/ArtoraFooter';

const Artora = () => {
    return (
        <div>
            <ArtoraBanner />
            <ArtoraServices />
            <AntoraAbout />
            <AntoraPortfolio/>
            <AntoraTestimonials />
            <AntoraStartProjects />
            <AwardsSection />
            <ArtFooter />
        </div>
    );
};

export default Artora;