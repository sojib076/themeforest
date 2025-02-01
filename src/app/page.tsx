"use client";

import AboutUs from "@/Components/Home/AboutUs";
import Choose from "@/Components/Home/Choose";
import FAQ from "@/Components/Home/FAQ";
import Herosection from "@/Components/Home/HeroSection";
import Price from "@/Components/Home/Price";
import Projects from "@/Components/Home/Projects";
import Services from "@/Components/Home/Services";
import Team from "@/Components/Home/Team";
import Testomony from "@/Components/Home/Testomony";


export default function Home() {
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
  </div>
  );
}
