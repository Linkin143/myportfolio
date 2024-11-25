import React from "react";
import AnimatedIntro from "../components/AnimatedIntro";
import CertificateCard from "../components/CertificateCard";
import ExpertLevel from "../components/ExpertLevel";
import Footer from "../components/Footer";
import HeroPage from "../components/HeroPage";
import Navbar2 from "../components/Navbar2";
import TechWork from "../components/TechWork";
import Work from "../components/Work";
function Home() {
  return (
    <div>
      <Navbar2 />
      <HeroPage />
      <Work />
      <TechWork />  
      <ExpertLevel />
      <CertificateCard />
      <AnimatedIntro />
      <Footer />
    </div>
  );
}

export default Home;
