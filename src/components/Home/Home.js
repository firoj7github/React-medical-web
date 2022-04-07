import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from '../../image/doctor.png'
import logo1 from '../../image/pas.jpg'
import logo2 from '../../image/img-1.jpg'
import logo3 from '../../image/img-2.jpg'
import logo4 from '../../image/img-3.jpg'
import logo5 from '../../image/best2.png'
import logo6 from '../../image/best.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandHoldingMedical, faBrandsfaFacebook,  faPills, faTruckMedical } from '@fortawesome/free-solid-svg-icons';




const Home = () => {
    const [services, setService]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <div className="home-header">
                <div className="home-img">
                   <img src={logo} alt="" />
                </div>
               <div className="home-title">
                  <h1>We're Always <br />Ready  To Help You</h1>
                  <p>The Master of Public Health focuses on the comprehensive assessment of all determinants of health, which include broader social and environmental factors in addition to physical risk factors. </p>
                  <a href="">Contact Us</a>
               </div>
            </div>

            <div className="part">
                <div className="part-1">
                    <h2>Sample Collection</h2>
                   <div className="line">
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                    <p>Public health scholarships help offset the costs of school, and in some cases for your support.</p>
                    <a href="">learn more</a>
                </div>
                <div className="part-2">
                    <h2>Report Analysic</h2>
                    <div className="line">
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                    <p>Meritage primary care physicians provide medical services to over half a million residents. </p>
                    <a href="">learn more</a>
                </div>
                <div className="part-3">
                    <h2>Test Collection</h2>
                    <div className="line">
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                    <p>A network of 700+ Primary Care Physicians working together to provide quality life.</p>
                    <a href="">learn more</a>
                </div>
                <div className="part-4">
                    <h2>Medichin Manage</h2>
                    <div className="line">
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                    <p>For more information about Cassia Obtusifolia Magnetite Pillow Cervical Magnetic Health Care. </p>
                    <a href="">learn more</a>
                </div>
            </div>

           


            
            
            <div className="programm">
                <h1>Our Health Programm</h1>
                <div className="state">
                       <div className="line-7"></div>
                       <div className="line-6"></div>
                       <div className="line-5"></div>
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                   <p>Medicin working together to provide quality care for your life and safe your life.</p>
                   <div className="programm-total">
                   <div className="programm-1">
                       <FontAwesomeIcon className='icon-use' icon={faHandHoldingMedical}></FontAwesomeIcon>
                       <h2>Life Time Support</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fuga assumenda labore deleniti? Numquam nesciunt qui, aspernatur saepe fugiat a?</p>
                   </div>
                <div className="programm-2">
                    <FontAwesomeIcon className='icon-use' icon={ faPills
                
                   }></FontAwesomeIcon>
                   <h2>Manage Pills</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fuga assumenda labore deleniti? Numquam nesciunt qui, aspernatur saepe fugiat a?</p>
                </div>
                <div className="programm-3">
                    <FontAwesomeIcon className='icon-use' icon={faTruckMedical}></FontAwesomeIcon>
                    <h2>Ambulance Service</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fuga assumenda labore deleniti? Numquam nesciunt qui, aspernatur saepe fugiat a?</p>
                </div>
                   </div>
                

            </div>

            <div className="service">
                <div className="service-detail">
                   
                    <h1>Health Service <br /> Always Be Carefully</h1>
                    <div className="line-plus">
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                   <p>Your smile says a lot about the way you feel – inside and out. Our team can care for everyone in the family, from toddlers to seniors. And because we have an extensive team of dentists and specialist.</p>
                    
                    
                </div>
                <div className="service-img">
                   <img src={logo1} alt="" />
                </div>
            </div>

            <div className="blog">
                <h1>Our Health Care</h1>
                <div className="line-add">
                <div className="line-7"></div>
                       <div className="line-6"></div>
                       <div className="line-5"></div>
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                <div className="blog-total">
                <div className="blog-1">
               <img src={logo2} alt="" />
               <h2>General information</h2>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum consequatur aperiam ab quidem ipsa cumque.</p>
              </div>
              <div className="blog-2">
              <img src={logo3} alt="" />
              <h2>Help and support</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit itaque architecto est totam, natus expedita.</p>
              </div>
              <div className="blog-3">
              <img src={logo4} alt="" />
              <h2>Manage cost</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quidem eum modi ratione, quae sunt?</p>
              </div>
                </div>
              
            </div>

            <div className="about">
                <h1>Our Team</h1>
                <div className="line-add">
                <div className="line-7"></div>
                       <div className="line-6"></div>
                       <div className="line-5"></div>
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
                   </div>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores totam explicabo in.</p>
                <div className="about-detail">
                <div className="about-1">
                <div className="about-img">
                   <img src={logo5} alt="" />
                </div>
                <div className="about-title">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> <br /><br /> <small>Dr.Devid miller</small>  </p>
                   
                </div>
                </div>
                <div className="about-2">
                <div className="about-img">
                   <img src={logo6} alt="" />
                </div>
                <div className="about-header">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> <br /><br /> <small>Dr.Sejita lepis</small>  </p>
                </div>
                </div>
                
                </div>
                
            </div>

            <div className="footer">
                <div className="footer-1">
                <h3>Our Location</h3>
                <div className="flow"></div>
                <p>Gazipur</p>
                <p>Khulna</p>
                <p>Dhaka</p>
                <p>Kushtia</p>
                </div>
                
                
                <div className="footer-2">
                    <h3>Get In Touch</h3>
                    <div className="flow"></div>
                    <p>Feedback</p>
                    <p>Help</p>
                    <p>Support</p>
                    <p>Where Should We Go Next?</p>
                </div>
                <div className="footer-3">
                    <h3>Our Story</h3>
                    <div className="flow"></div>
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Join</p>
                    <p>Mobile Apps</p>
                </div>
                <div className="footer-4">
                    <h3>Best Doctor</h3>
                    <div className="flow"></div>
                    <p>Our Clinic provides a fresh new approach to primary care. Receive high-quality, personalized care from our board-certified doctors.</p>
                    <FontAwesomeIcon icon="faBrandsfaFacebook" ></FontAwesomeIcon>

                </div>
            </div>
        </div>
    );
};

export default Home;