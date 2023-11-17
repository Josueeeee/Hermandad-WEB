import React from 'react';
import d2 from "../assets/d2.png"
import h1 from "../assets/h1.png"
import h2 from "../assets/h2.png"
import bgCFP from "../assets/cfp-proyects.png"
import bgbecas from "../assets/pb-proyects.jpg"
import bgcresej from '../assets/crese-proyects.jpg'
import imgcresej from '../assets/img-cresej.png'
import { Link } from 'react-router-dom';

const Proyects = () => {
    return (
        <div style={{ width: '100%' }}>
            <div className='sliderProjects'>
                <div data-aos="zoom-in" data-aos-delay="700" style={{ width: '500px' }}>
                    <p style={{ marginTop: '4rem' }}>PROYECTOS EN EJECUCIÓN</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="700">
                    <img src={h1} alt="" className='img-HDH' />
                    <img src={d2} alt="" className='img-HDH' />
                    <img src={h2} alt="" className='img-HDH' />
                </div>
            </div>
            <div className='sliderProjects-2Proyects' data-aos="zoom-in" >
                <div style={{
                    backgroundImage: `linear-gradient(
                                    180deg, rgba(128, 127, 127, 0.84) 0%,
                                    rgba(182, 182, 182, 0.69) 10.52%,
                                    rgba(255, 255, 255, 0.80) 50.09%
                                     ) , url(${bgCFP})`
                }} className='bg-proyects content w50' >
                    <div className='content-info-proyects'>
                        <p className='title-info-proyect pb-2'>
                            CENTRO DE FORMACIÓN PROFESIONAL
                            HERMNADAD DE HONDURAS
                        </p>
                        <p className='pb-2'>Contribuye con el proceso de desarrollo económico y social de la población región occidental de Honduras a través de la formación </p>
                        <Link className='ir-a2' to='/nosotros' >
                            VER MAS
                        </Link>
                    </div>
                </div>
                <div style={{
                    backgroundImage: `linear-gradient(
                                    180deg, rgba(128, 127, 127, 0.84) 0%,
                                    rgba(182, 182, 182, 0.69) 15.52%,
                                    rgba(255, 255, 255, 0.80) 50.09%
                                     ) , url(${bgbecas})`
                }} className='bg-proyects content w50 ' >
                    <div className='content-info-proyects'>
                        <p className='title-info-proyect pb-2'>
                            PROGRAMA DE BECAS
                            PARA EL DESARROLLO
                            HERMANDAD DE HONDURAS
                        </p>
                        <p className='pb-2'>El Programa de Becas para el Desarrollo tiene como propósito contribuir con la formación integral de estudiantes de la zona requisitos y cualidades para continuar estudios en centros educativos oficiales de nivel medio y superior, con una planificación ordenada y sistemática de las diferentes actividades formativas que se desarrollan.</p>
                        <Link className='ir-a2' to='/nosotros' >
                            VER MAS
                        </Link>
                    </div>
                </div>
                <div style={{
                    backgroundImage: `linear-gradient(
                        180deg,
                        rgba(16, 47, 0, 0.84) 0%,
                        rgba(2, 67, 0, 0.69) 5.52%,
                        rgba(0, 84, 27, 0.686) 15.09%
                      ) , url(${bgcresej})`
                }} className='bg-proyects-cresejhdh ' data-aos="fade-down">
                    <div className='content-cresej'>
                        <div className='titlecresje d-flex '>
                            <p style={{ color: 'white' }}>CRESE</p><p style={{ color: '#FFC700' }}>JHDH</p>
                        </div>
                        <div className='titlecresje'>
                            <div className='d-flex'>
                                <p style={{ color: 'white' }}>CREACIÓN DE EMPREN </p> <p style={{ color: '#3BAA36' }}>DIMIENTO SOSTENIBLE</p>
                            </div>
                            <div className='d-flex '>
                                <p style={{ color: 'white' }}>EN JOVÉNES DE HERM</p><p style={{ color: '#FFC700' }}>ANDAD DE HONDURAS</p>

                            </div>
                        </div>
                        <div className='d-flex content-info-cresej'>
                            <div className='info-cresej'>
                                <p>Formar y financiar a jóvenes emprendedores en temas estratégicos, que ayuden a los participantes a: Desarrollar habilidades y conocimientos para el desarrollo de emprendimiento, así mismo el proyecto tiene como una de sus finalidades impulsar con certificaciones en cada rubro seleccionado por los participantes</p>
                            </div>
                            <div>

                                <div className='bg-img'>
                                    <img className='img' src={imgcresej} alt="" />
                                </div>
                            </div>
                            <div className='cr-1'> </div >
                            <div className='cr-2'></div>

                        </div>
                        <Link className='ir-a2' to='/nosotros' >
                            VER MAS
                        </Link>
                    </div>
                </div>
            </div>
            <div >

            </div>
        </div >
    );
};

export default Proyects;