import React from 'react';
import './Element.css'

const Element = ({service}) => {
    const {title, img, detail} =service;
    return (
        <div className='element-manage'>
            
           <div className="element-img">
             <img src={img} alt="" />
           </div>
           <div className="element-title">
            <p>{detail}</p>
            <h4>{title}</h4>
           </div>
        </div>
    );
};

export default Element;