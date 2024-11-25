import React from 'react';
import { Link } from 'react-router-dom';
import CertificateImg1 from "../assets/certiImg1.png";
import CertificateImg2 from "../assets/certiImg2.png";
import CertificateImg3 from "../assets/certiImg3.svg";
import CertificateImg4 from "../assets/certiImg4.svg";
import CertificateImg5 from "../assets/certiImg5.svg";
import CertificateImg6 from "../assets/certiImg6.png";
import "./CertificateCard.css";
const CertificateCard = () => {
    return (
        <div className='certificate-header'>
            <h1>Certificates</h1>
            <p>Awards & Certificates from various sources</p>
            <div className='certificate-conatiner'>
                <Link to="https://www.credly.com/earner/earned/badge/885b555b-d77f-48f3-b05c-cce9dd090ecc" target='_blank'><div className='certificate-card certi-crd1'>
                    <div className='certi-crdImg'>
                        <img src={CertificateImg1} alt=''></img>
                    </div>
                    <div className='certi-crdDetail'>
                        <h2>Professional Cloud Database Engineer</h2>
                        <p><i class="fa-solid fa-calendar-days"></i>June 12, 2024</p>
                    </div>
                </div>
                </Link>
                <Link to="https://skillsoft.digitalbadges.skillsoft.com/d3aea126-55f3-489e-b46e-aadf1a5efaf9" target='_blank'><div className='certificate-card certi-crd2'>
                    <div className='certi-crdImg'>
                        <img src={CertificateImg2} alt=''></img>
                    </div>
                    <div className='certi-crdDetail'>
                        <h2>An Introduction to Generative AI</h2>
                        <p><i class="fa-solid fa-calendar-days"></i>August 12, 2024</p>
                    </div>
                </div>
                </Link>
                <Link to="https://learn.microsoft.com/en-us/users/princekumar-3826/credentials/939de19e519a905f?ref=https%3A%2F%2Fwww.linkedin.com%2F" target='_blank'><div className='certificate-card certi-crd3'>
                    <div className='certi-crdImg'>
                        <img src={CertificateImg3} alt=''></img>
                    </div>
                    <div className='certi-crdDetail'>
                        <h2>DevOps Engineer Expert</h2>
                        <p><i class="fa-solid fa-calendar-days"></i>June 21, 2024</p>
                    </div>
                </div>
                </Link>
                <Link to="https://learn.microsoft.com/en-us/users/princekumar-3826/credentials/certification/azure-developer?tab=credentials-tab" target='_blank'><div className='certificate-card certi-crd4'>
                    <div className='certi-crdImg'>
                        <img src={CertificateImg4} alt=''></img>
                    </div>
                    <div className='certi-crdDetail'>
                        <h2>Azure Developer Associate</h2>
                        <p><i class="fa-solid fa-calendar-days"></i>June 21, 2024</p>
                    </div>
                </div>
                </Link>
                <Link to="https://learn.microsoft.com/en-us/users/princekumar-3826/credentials/certification/azure-fundamentals?tab=credentials-tab" target='_blank'><div className='certificate-card certi-crd4'>
                    <div className='certi-crdImg'>
                        <img src={CertificateImg5} alt=''></img>
                    </div>
                    <div className='certi-crdDetail'>
                        <h2>Azure Fundamentals</h2>
                        <p><i class="fa-solid fa-calendar-days"></i>February 27, 2024</p>
                    </div>
                </div>
                </Link>
                <Link to="https://google.accredible.com/d7d51371-c979-43c7-af52-f72b8c93f850" target='_blank'><div className='certificate-card certi-crd4'>
                    <div className='certi-crdImg certi-Img6'>
                        <img src={CertificateImg6} alt=''></img>
                    </div>
                    <div className='certi-crdDetail'>
                        <h2>Professional Cloud DevOps Engineer</h2>
                        <p><i class="fa-solid fa-calendar-days"></i>March 19,2024</p>
                    </div>
                </div>
                </Link>

            </div>

        </div>
    )
}

export default CertificateCard;