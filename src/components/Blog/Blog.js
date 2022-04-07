import React from 'react';
import './Blog.css'
import logo1 from '../../image/pas.jpg'

const Blog = () => {
    return (
        <div>
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
        </div>
    );
};

export default Blog;