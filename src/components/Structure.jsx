import React from 'react';
import Footer from './Footer';
import estructura from '../assets/Estructura.png'
const Structure = ({ elemt3, theigth }) => {
    return (
        <div style={{ display: elemt3 ? 'block' : 'none' }}>
            <div data-aos="zoom-in" className='estructura-img' style={{ textAlign: 'center' }}>
                <img src={estructura} alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default Structure;