import React from 'react';
import ServiceImg1 from "../assets/serviceCard1.jpg";
import ServiceImg2 from "../assets/serviceCard2.jpg";
import ServiceImg3 from "../assets/serviceCard3.jpg";
import ServiceImg4 from "../assets/serviceCard4.jpg";
import ServiceImg6 from "../assets/serviceCard6.jpg";
import ServiceImg7 from "../assets/serviceCard7.webp";
import "./DemoCard.css";



const DemoCard = () => {
    return (
        <div className='demo-card-conttainer'>
            <div className='demo-card demo-card1'>
                <header>Services I Offer</header>
                
            </div>

            <div className='demo-card demo-card2'>
                <div className="container">
                    <img src={ServiceImg4} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">WebSite Designing</div>
                    </div>
                </div>

            </div>
            <div className='demo-card demo-card3'>
                <div className="container demo-card3-container">
                    <img src={ServiceImg2} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">Backend Server Development</div>
                    </div>
                </div></div>
            <div className='demo-card demo-card4'>
                <div className="container">
                    <img src={ServiceImg3} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">Manual Testing</div>
                    </div>
                </div></div>
            <div className='demo-card demo-card5'>
                <div className="container">
                    <img src={ServiceImg6} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">Android & iOS Mobile Automation</div>
                    </div>
                </div></div>
            <div className='demo-card demo-card6'><div className="container">
                <img src={ServiceImg1} alt="Avatar" className="image" />
                <div className="overlay">
                    <div className="text">End To End Software Testing</div>
                </div>
            </div></div>
            <div className='demo-card demo-card7'>
                <div className="container">
                    <img src={ServiceImg7} alt="Avatar" className="image" />
                    <div className="overlay">
                        <div className="text">PC Automation</div>
                    </div>
                </div></div>

        </div>

    )
}

export default DemoCard