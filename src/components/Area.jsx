import React from 'react';
import Footer from './Footer';
import mapa from '../assets/mapa-Honduras.png'

const Area = ({ elemt4, theigth }) => {
    return (
        <div style={{ display: elemt4 ? 'block' : 'none' }}>
            <div data-aos="zoom-in" style={{ padding: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>ZONA DE INFLUENCIA DE HERMANDAD DE HONDURAS</h2>
                <div className='Contain-infoArea'>
                    <div>
                        <ol>
                            <li>Ocotepeque</li>
                            <li>Copán</li>
                            <li>Lempira</li>
                            <li>Comayagua</li>
                            <li>Intibuca</li>
                            <li>Santa Bárbara</li>
                            <li>Cortés</li>
                            <li>La Paz</li>
                        </ol>
                    </div>
                    <div className='mapa-H'>
                        <img src={mapa} alt="" />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Area;