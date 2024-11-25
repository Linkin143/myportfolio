import React from 'react';
import Projectbg from "../assets/project-bg.png";
import AnimatedIntro from "../components/AnimatedIntro";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar2 from "../components/Navbar2";
import PricingCard from '../components/PricingCard';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div>
    <Navbar2 />
    <HeroImg2 heading="PROJECTS" text="Some of my most recent works." heroImg={Projectbg}/>
    <ProjectCard />
    <PricingCard />
    <AnimatedIntro />
    <Footer />
    </div>
  )
}

export default Project