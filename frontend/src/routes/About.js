import React from 'react';
import aboutBg from "../assets/about-bg.png";
import AboutContent from '../components/AboutContent';
import CertificateCard from '../components/CertificateCard';
import ExpertLevel from '../components/ExpertLevel';
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar2 from "../components/Navbar2";
import TechWork from '../components/TechWork';

const About = () => {
  return (
    <div>
      <Navbar2 />
      <HeroImg2 heading="ABOUT" text="I am a friendly Developer." heroImg={aboutBg}/>
      <AboutContent />
      <TechWork />
      <ExpertLevel />
      <CertificateCard />
      <Footer />
    </div>
  )
}

export default About