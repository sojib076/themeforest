import Footer from '@/Components/Footer/Footer';
import AboutUs from '@/Components/landingPage-1/AboutUs';
import Choose from '@/Components/landingPage-1/Choose';
import FAQ from '@/Components/landingPage-1/FAQ';
import Herosection from '@/Components/landingPage-1/HeroSection';
import Price from '@/Components/landingPage-1/Price';
import Projects from '@/Components/landingPage-1/Projects';
import Services from '@/Components/landingPage-1/Services';
import Team from '@/Components/landingPage-1/Team';
import Testomony from '@/Components/landingPage-1/Testomony';
import React from 'react';

const page = () => {
    return (
        <div>
             <Herosection />
      <Services />
      <AboutUs />
      <Choose />
      <Projects />
      <Price />
      <Testomony />
      <Team />
      <FAQ />
      <Footer></Footer>
        </div>

    );
};

export default page;