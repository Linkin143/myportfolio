import React from 'react';
import contactBg from "../assets/contact-bg.png";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeroImg2 from '../components/HeroImg2';
import Navbar2 from "../components/Navbar2";
const Contact = () => {
  return (
    <div>
      <Navbar2 />
      <HeroImg2 heading="Contact Us" text="Lets have a chat." heroImg={contactBg}/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact