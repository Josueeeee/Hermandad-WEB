import React from 'react';
import Footer from './Footer';

const Philosophy = ({ elemt1, theigth }) => {

    return (
        <div style={{ display: elemt1 ? 'block' : 'none' }} >
            <div className='filosofia' style={{ display: 'flex' }}>
                <div data-aos="fade-right" data-aos-delay="500" className='misVis'>
                    <div className='tarjet-about vision'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="47" viewBox="0 0 66 47" fill="none">
                            <path d="M4.00176 0.46867C2.92928 -0.284048 1.37212 -0.109638 0.526508 0.845029C-0.319102 1.7997 -0.123168 3.1858 0.949313 3.93852L61.9982 46.5313C63.0707 47.284 64.6279 47.1096 65.4735 46.155C66.3191 45.2003 66.1232 43.8142 65.0507 43.0615L54.2021 35.4976C58.2858 31.7707 61.0495 27.594 62.4417 24.6291C62.782 23.9039 62.782 23.0961 62.4417 22.3709C60.9051 19.0938 57.6774 14.3205 52.8512 10.3366C48.0044 6.316 41.3324 2.93795 33 2.93795C25.967 2.93795 20.1096 5.35216 15.5412 8.51908L4.00176 0.46867ZM22.997 13.7238C28.0088 9.65734 35.6812 9.06067 41.487 12.6498C47.7569 16.542 49.6235 23.959 46.0451 29.8063L42.0748 27.0341C42.9411 25.2625 43.1679 23.2338 42.5698 21.2235C41.4252 17.414 37.6405 14.8529 33.4331 14.6969C32.835 14.6785 32.4844 15.2568 32.67 15.7709C32.8866 16.3584 33.0103 16.9826 33.0103 17.6343C33.0103 18.5706 32.7628 19.4518 32.3297 20.2321L22.997 13.7238ZM46.0038 41.0787L8.57012 14.8254C7.43576 16.1472 6.45609 17.4599 5.64142 18.6991L40.6002 43.089C42.5286 42.5841 44.3332 41.8957 46.0245 41.0879L46.0038 41.0787ZM3.55833 24.6291C5.09486 27.9062 8.32262 32.6795 13.1488 36.6634C17.9956 40.684 24.6676 44.062 33 44.062C33.3197 44.062 33.6291 44.0529 33.9487 44.0437L3.41396 22.7473C3.22834 23.3715 3.2799 24.0324 3.55833 24.6291Z" fill="white" />
                        </svg>
                        <h3>Visión</h3>
                        <p>Ser una organización auto sostenible con cobertura nacional y alto impacto social con intervenciones programáticas innovadoras en comunidades en desarrollo.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500" className='tarjet-about mision'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="53" viewBox="0 0 54 53" fill="none">
                            <path d="M47.25 26.5C47.25 23.89 46.7262 21.3055 45.7086 18.8942C44.6909 16.4828 43.1993 14.2918 41.3189 12.4463C39.4385 10.6007 37.2062 9.13671 34.7493 8.13789C32.2925 7.13908 29.6593 6.625 27 6.625C24.3407 6.625 21.7075 7.13908 19.2507 8.13789C16.7938 9.13671 14.5615 10.6007 12.6811 12.4463C10.8007 14.2918 9.3091 16.4828 8.29144 18.8942C7.27378 21.3055 6.75 23.89 6.75 26.5C6.75 29.11 7.27378 31.6945 8.29144 34.1058C9.3091 36.5172 10.8007 38.7082 12.6811 40.5537C14.5615 42.3993 16.7938 43.8633 19.2507 44.8621C21.7075 45.8609 24.3407 46.375 27 46.375C29.6593 46.375 32.2925 45.8609 34.7493 44.8621C37.2062 43.8633 39.4385 42.3993 41.3189 40.5537C43.1993 38.7082 44.6909 36.5172 45.7086 34.1058C46.7262 31.6945 47.25 29.11 47.25 26.5ZM0 26.5C0 19.4718 2.84464 12.7314 7.90812 7.76167C12.9716 2.79196 19.8392 0 27 0C34.1608 0 41.0284 2.79196 46.0919 7.76167C51.1554 12.7314 54 19.4718 54 26.5C54 33.5282 51.1554 40.2686 46.0919 45.2383C41.0284 50.208 34.1608 53 27 53C19.8392 53 12.9716 50.208 7.90812 45.2383C2.84464 40.2686 0 33.5282 0 26.5ZM27 34.7812C29.2378 34.7812 31.3839 33.9088 32.9662 32.3557C34.5486 30.8027 35.4375 28.6963 35.4375 26.5C35.4375 24.3037 34.5486 22.1973 32.9662 20.6443C31.3839 19.0912 29.2378 18.2188 27 18.2188C24.7622 18.2188 22.6161 19.0912 21.0338 20.6443C19.4514 22.1973 18.5625 24.3037 18.5625 26.5C18.5625 28.6963 19.4514 30.8027 21.0338 32.3557C22.6161 33.9088 24.7622 34.7812 27 34.7812ZM27 11.5938C31.028 11.5938 34.891 13.1642 37.7392 15.9597C40.5874 18.7552 42.1875 22.5466 42.1875 26.5C42.1875 30.4534 40.5874 34.2448 37.7392 37.0403C34.891 39.8358 31.028 41.4062 27 41.4062C22.972 41.4062 19.109 39.8358 16.2608 37.0403C13.4126 34.2448 11.8125 30.4534 11.8125 26.5C11.8125 22.5466 13.4126 18.7552 16.2608 15.9597C19.109 13.1642 22.972 11.5938 27 11.5938ZM23.625 26.5C23.625 25.6215 23.9806 24.7789 24.6135 24.1577C25.2465 23.5365 26.1049 23.1875 27 23.1875C27.8951 23.1875 28.7535 23.5365 29.3865 24.1577C30.0194 24.7789 30.375 25.6215 30.375 26.5C30.375 27.3785 30.0194 28.2211 29.3865 28.8423C28.7535 29.4635 27.8951 29.8125 27 29.8125C26.1049 29.8125 25.2465 29.4635 24.6135 28.8423C23.9806 28.2211 23.625 27.3785 23.625 26.5Z" fill="white" />
                        </svg>
                        <h3>Misión</h3>
                        <p>
                            Impulsar procesos sociales sostenibles e integrales, con enfoque empresarial de desarrollo comunitario.
                        </p>
                    </div>
                </div>
                <div className='valores' data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500" >
                    <h2 style={{ paddingBottom: '2rem' }}>Valores institucionales</h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='contain-val'>
                            <div className=' left timeLine'>
                                <p>Honestidad</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <ellipse cx="8.5" cy="9" rx="8.5" ry="9" fill="#FFE600" />
                                </svg>

                            </div>
                            <div className=' rigth timeLine'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <ellipse cx="8.5" cy="9" rx="8.5" ry="9" fill="#FFE600" />
                                </svg>
                                <p>Integridad</p>
                            </div>
                            <div className=' left timeLine'>
                                <p>Incluisión</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <ellipse cx="8.5" cy="9" rx="8.5" ry="9" fill="#FFE600" />
                                </svg>

                            </div>
                            <div className=' rigth timeLine'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <ellipse cx="8.5" cy="9" rx="8.5" ry="9" fill="#FFE600" />
                                </svg>
                                <p>Equidad</p>
                            </div>
                            <div className=' left timeLine'>
                                <p>Ética</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <ellipse cx="8.5" cy="9" rx="8.5" ry="9" fill="#FFE600" />
                                </svg>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Philosophy;