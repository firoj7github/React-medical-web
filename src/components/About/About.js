import React from 'react';
import './About.css'
import logo5 from '../../image/best2.png'
import logo6 from '../../image/best.png'

const About = () => {
    return (
        <div>
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
        </div>
    );
};

export default About;