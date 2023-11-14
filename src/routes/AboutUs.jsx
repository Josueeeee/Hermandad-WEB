import React, { useState } from 'react';
import years from '../assets/46.png'
import History from '../components/History';
import Philosophy from '../components/Philosophy';
import Structure from '../components/Structure';
import Footer from '../components/Footer'
import Area from '../components/Area';

const AboutUs = () => {
    const theigth = window.innerHeight
    const theigth2 = window.innerHeight
    const [elemt1, setElement1] = useState(true)
    const [elemt2, setElement2] = useState(false)
    const [elemt3, setElement3] = useState(false)
    const [elemt4, setElement4] = useState(false)
    const hide = (selecNum) => {
        if (selecNum == 1) {
            setElement1(true)
            setElement2(false)
            setElement3(false)
            setElement4(false)
        } else if (selecNum == 2) {
            setElement1(false)
            setElement2(true)
            setElement3(false)
            setElement4(false)
        } else if (selecNum == 3) {
            setElement1(false)
            setElement2(false)
            setElement3(true)
            setElement4(false)
        } else if (selecNum == 4) {
            setElement1(false)
            setElement2(false)
            setElement3(false)
            setElement4(true)
        }
    }

    return (
        <div style={{ width: '100%' }}>
            <div id='first-page' className='sliderAboout' style={{ height: theigth }}>
                <div data-aos="zoom-in" data-aos-delay="700" style={{ width: '500px' }}>
                    <p>SOBRE NOSOTROS</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" className='containt-info'>
                <div className='years-about' >
                    <img src={years} style={{ width: '150px' }} alt="" />
                </div>
                <div className='proyects'>
                    <p>Más de 550 proyectos ejecutados</p>
                </div>
            </div>
            <div >
                <div >
                    <div className='menu-about' style={{ padding: '2rem' }}>
                        <div>
                            <p onClick={() => hide(1)} >Nuestra filosofía</p>
                            <div className='indicador1' style={{ transform: elemt1 ? `translate(0px)` : 'translate(-2000px)' }}> </div>
                        </div>
                        <div>
                            <p onClick={() => hide(2)} >Historia y trayectoria</p>
                            <div className='indicador1' style={{ transform: elemt2 ? `translate(0px)` : 'translate(-2000px)' }}> </div>
                        </div>
                        <div >
                            <p onClick={() => hide(3)} >Estructura Organizacional</p>
                            <div className='indicador1' style={{ transform: elemt3 ? `translate(0px)` : 'translate(-2000px)' }}> </div>
                        </div>
                        <div>

                            <p onClick={() => hide(4)} >Área de influencia</p>
                            <div className='indicador1' style={{ transform: elemt4 ? `translate(0px)` : 'translate(-2000px)' }}> </div>
                        </div>


                    </div>
                </div>
                <div>
                    <Philosophy elemt1={elemt1} theigth={theigth} />
                    <History elemt2={elemt2} theigth={theigth} />
                    <Structure elemt3={elemt3} theigth={theigth} />
                    <Area elemt4={elemt4} theigth={theigth} />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;