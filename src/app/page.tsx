"use client";

import AboutUs from "@/Components/Home/AboutUs";
import Choose from "@/Components/Home/Choose";
import Herosection from "@/Components/Home/HeroSection";
import Price from "@/Components/Home/Price";
import Projects from "@/Components/Home/Projects";
import Services from "@/Components/Home/Services";


export default function Home() {
  return (
  <div> 
      <Herosection />
      <Services />
      <AboutUs />
      <Choose />
      <Projects />
      <Price />
  </div>
  );
}
