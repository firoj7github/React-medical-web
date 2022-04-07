import React from 'react';
import './Service.css'
import logo2 from '../../image/img-1.jpg'
import logo3 from '../../image/img-2.jpg'
import logo4 from '../../image/img-3.jpg'

const Service = () => {
    return (
        <div>
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
        </div>
    );
};

export default Service;