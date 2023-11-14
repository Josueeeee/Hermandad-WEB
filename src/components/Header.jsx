import React, { useCallback, useEffect, useState } from 'react';
import logo from '../assets/logo-png.png'
import { Link } from 'react-router-dom';
import menuData from '../api/MenuData.json'
const Header = () => {

    const [toggle, setToggel] = useState(false)
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const clickActivate = () => {
        setToggel(!toggle)
    }
    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {

        } else if (y < window.scrollY) {
            setToggel(false)
        }
        setY(window.scrollY)
    }, [y]);
    useEffect(() => {

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    
    return (
        <div className={`${toggle ? 'menu-Activate' : ''}`} >
            < div className='header' >
                <Link to='/' data-aos="zoom-in" data-aos-delay="400">
                    <img src={logo} alt="" />
                </Link>
                <div className="burguer" >
                    <div onClick={clickActivate} className={`icon nav-icon-5 ${toggle ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div >
            <div className={`${toggle ? 'menu-toggle' : 'hide'}`}>
                <ul className='menu-style'>
                    {
                        menuData.map(data =>
                            <Link onClick={() => setToggel(false)} key={data.URL} to={data.URL} className='Lista-menu'>
                                {data.title}
                            </Link>)
                    }
                </ul>
            </div>
            <div className='social-media' data-aos="zoom-in" data-aos-delay="400">
                <a href="mailto:ahdh.hermandadhonduras@gmail.com?subject=Asociaci%C3%B3n%20Hermandad%20de%20Honduras">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 25 19" fill="none">
                        <path d="M2.34375 0C1.0498 0 0 1.0498 0 2.34375C0 3.08105 0.34668 3.77441 0.9375 4.21875L11.5625 12.1875C12.1191 12.6025 12.8809 12.6025 13.4375 12.1875L24.0625 4.21875C24.6533 3.77441 25 3.08105 25 2.34375C25 1.0498 23.9502 0 22.6562 0H2.34375ZM0 5.46875V15.625C0 17.3486 1.40137 18.75 3.125 18.75H21.875C23.5986 18.75 25 17.3486 25 15.625V5.46875L14.375 13.4375C13.2617 14.2725 11.7383 14.2725 10.625 13.4375L0 5.46875Z" fill="white" />
                    </svg>
                </a>
                <a href="https://wa.link/39p11t" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                        <path d="M12.5 0C19.4035 0 25 5.59644 25 12.5C25 19.4035 19.4035 25 12.5 25C10.2076 25 8.05941 24.383 6.21234 23.3059L0.00522524 25L1.69517 18.7894C0.61745 16.942 0 14.7931 0 12.5C0 5.59644 5.59643 0 12.5 0ZM7.98917 6.63541C7.82743 6.64678 7.66886 6.68628 7.52448 6.76014C7.41617 6.81555 7.31562 6.89564 7.15763 7.04483C7.00844 7.18569 6.92198 7.30871 6.83088 7.42733C6.36876 8.029 6.12038 8.76756 6.12499 9.52623C6.12751 10.1395 6.28681 10.7355 6.53838 11.292C7.04854 12.4205 7.88987 13.6135 9.00119 14.7199C9.26814 14.9856 9.52968 15.2543 9.81169 15.5025C11.191 16.717 12.8348 17.5928 14.6121 18.0602C14.6121 18.0602 15.3121 18.1678 15.3224 18.1684C15.5543 18.1809 15.7858 18.1641 16.0179 18.1522C16.382 18.1335 16.7375 18.035 17.0593 17.8636C17.2661 17.7535 17.364 17.6987 17.5376 17.5892C17.5376 17.5892 17.5909 17.5532 17.6936 17.4767C17.8624 17.351 17.9666 17.2625 18.107 17.1168C18.2105 17.0093 18.2995 16.8822 18.3683 16.7391C18.466 16.5351 18.5644 16.1458 18.6035 15.8224C18.6334 15.5754 18.6244 15.4404 18.6211 15.3568C18.6158 15.2223 18.5046 15.0839 18.3829 15.0251L17.656 14.6984C17.656 14.6984 16.5691 14.2254 15.9044 13.9221C15.8351 13.8905 15.7594 13.8759 15.6833 13.8713C15.5165 13.861 15.3296 13.9045 15.2108 14.0297C15.2045 14.0272 15.1218 14.0988 14.2174 15.1944C14.1675 15.254 14.0506 15.3836 13.8485 15.3715C13.818 15.3694 13.7876 15.365 13.758 15.3573C13.6761 15.3356 13.5964 15.3071 13.5184 15.2741C13.3638 15.2085 13.3095 15.1836 13.2039 15.1381C12.4823 14.8229 11.82 14.4011 11.2346 13.885C11.0776 13.7467 10.9316 13.5979 10.7811 13.452C10.2559 12.9429 9.82588 12.4014 9.50598 11.8673C9.48852 11.8381 9.4616 11.796 9.43262 11.7489C9.38028 11.6638 9.32255 11.5625 9.30445 11.493C9.25799 11.3091 9.38125 11.1614 9.38125 11.1614C9.38125 11.1614 9.6855 10.8287 9.82687 10.6479C9.96287 10.4738 10.0803 10.3035 10.155 10.1821C10.3023 9.94541 10.3489 9.70077 10.2715 9.51204C9.92082 8.65706 9.55899 7.8067 9.18609 6.96117C9.11249 6.79431 8.89358 6.67307 8.6945 6.65009C8.62708 6.6423 8.5597 6.63447 8.492 6.63002C8.32443 6.62185 8.15652 6.62365 7.98917 6.63541Z" fill="white" />
                    </svg>
                </a>
                <a href="https://www.facebook.com/hermandadhonduras" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                        <path d="M12.5 0C5.59643 0 0 5.63064 0 12.5764C0 18.8537 4.57106 24.0565 10.5469 25V16.2117H7.37303V12.5764H10.5469V9.80567C10.5469 6.65371 12.413 4.91266 15.2683 4.91266C16.6359 4.91266 18.0664 5.15829 18.0664 5.15829V8.25326H16.4901C14.9374 8.25326 14.4531 9.2227 14.4531 10.2173V12.5764H17.9199L17.3658 16.2117H14.4531V25C20.4289 24.0565 25 18.8537 25 12.5764C25 5.63064 19.4035 0 12.5 0Z" fill="white" />
                    </svg>
                </a>

                <a href="https://www.instagram.com/hermandad_de_honduras_ongd/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                        <path d="M13.7844 0C15.1912 0.00232508 15.9041 0.00976285 16.5201 0.028101L16.7627 0.0360388C17.043 0.0460016 17.3195 0.0585022 17.6529 0.0741278C18.983 0.13558 19.8905 0.346012 20.6874 0.655397C21.5113 0.973108 22.2072 1.4023 22.9019 2.09711C23.5957 2.79192 24.025 3.48987 24.3437 4.31177C24.652 5.10762 24.8625 6.01599 24.925 7.34625C24.9399 7.67959 24.9519 7.9561 24.9618 8.23642L24.9696 8.47903C24.9879 9.09499 24.9963 9.80798 24.9989 11.2148L24.9999 12.1469C25 12.2608 25 12.3783 25 12.4996L24.9999 12.8522L24.9991 13.7844C24.9967 15.1912 24.9894 15.9041 24.971 16.5201L24.963 16.7627C24.9531 17.043 24.9406 17.3195 24.925 17.6529C24.8635 18.983 24.652 19.8905 24.3437 20.6874C24.026 21.5113 23.5957 22.2072 22.9019 22.9019C22.2072 23.5957 21.5081 24.025 20.6874 24.3437C19.8905 24.652 18.983 24.8625 17.6529 24.925C17.3195 24.9399 17.043 24.9519 16.7627 24.9618L16.5201 24.9696C15.9041 24.9879 15.1912 24.9963 13.7844 24.9989L12.8522 24.9999C12.7383 25 12.6208 25 12.4996 25L12.1469 24.9999L11.2148 24.9991C9.80798 24.9967 9.09499 24.9894 8.47903 24.971L8.23642 24.963C7.9561 24.9531 7.67959 24.9406 7.34625 24.925C6.01599 24.8635 5.10971 24.652 4.31177 24.3437C3.48882 24.026 2.79192 23.5957 2.09711 22.9019C1.4023 22.2072 0.974158 21.5081 0.655397 20.6874C0.346012 19.8905 0.13663 18.983 0.0741278 17.6529C0.0592772 17.3195 0.0471642 17.043 0.0373513 16.7627L0.0294886 16.5201C0.0112005 15.9041 0.00286282 15.1912 0.000162726 13.7844L0 11.2148C0.00232508 9.80798 0.00976285 9.09499 0.028101 8.47903L0.0360388 8.23642C0.0460016 7.9561 0.0585022 7.67959 0.0741278 7.34625C0.13558 6.01495 0.346012 5.10867 0.655397 4.31177C0.973108 3.48882 1.4023 2.79192 2.09711 2.09711C2.79192 1.4023 3.48987 0.974158 4.31177 0.655397C5.10867 0.346012 6.01495 0.13663 7.34625 0.0741278C7.67959 0.0592772 7.9561 0.0471642 8.23642 0.0373513L8.47903 0.0294886C9.09499 0.0112005 9.80798 0.00286282 11.2148 0.000162726L13.7844 0ZM12.4996 6.24934C9.04581 6.24934 6.24934 9.04885 6.24934 12.4996C6.24934 15.9533 9.04885 18.7498 12.4996 18.7498C15.9533 18.7498 18.7498 15.9502 18.7498 12.4996C18.7498 9.04581 15.9502 6.24934 12.4996 6.24934ZM12.4996 8.74942C14.5708 8.74942 16.2497 10.4278 16.2497 12.4996C16.2497 14.5708 14.5713 16.2497 12.4996 16.2497C10.4284 16.2497 8.74942 14.5713 8.74942 12.4996C8.74942 10.4284 10.4278 8.74942 12.4996 8.74942ZM19.0623 4.37427C18.2006 4.37427 17.4997 5.07417 17.4997 5.93576C17.4997 6.79734 18.1996 7.49833 19.0623 7.49833C19.9238 7.49833 20.6249 6.79843 20.6249 5.93576C20.6249 5.07417 19.9227 4.37319 19.0623 4.37427Z" fill="white" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCYXe0AyxFo-9JEGfigB9GRA" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 26 21" fill="none">
                        <path d="M25.4567 3.28579C25.1577 1.99243 24.2767 0.97382 23.158 0.628141C21.1304 0 13 0 13 0C13 0 4.86961 0 2.84197 0.628141C1.72334 0.973875 0.842317 1.99243 0.543295 3.28579C0 5.63008 0 10.5212 0 10.5212C0 10.5212 0 15.4124 0.543295 17.7566C0.842317 19.05 1.72334 20.0262 2.84197 20.3719C4.86961 21 13 21 13 21C13 21 21.1304 21 23.158 20.3719C24.2767 20.0262 25.1577 19.05 25.4567 17.7566C26 15.4124 26 10.5212 26 10.5212C26 10.5212 26 5.63008 25.4567 3.28579ZM10.3409 14.962V6.08043L17.1363 10.5213L10.3409 14.962Z" fill="white" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/asociaci%C3%B3n-hermandad-de-honduras-ongd/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                        <path d="M21.2989 21.3042H17.5968V15.5031C17.5968 14.1197 17.5688 12.3396 15.6676 12.3396C13.7375 12.3396 13.4427 13.8449 13.4427 15.401V21.3042H9.74057V9.375H13.2968V11.001H13.3447C13.8417 10.0635 15.05 9.07396 16.8551 9.07396C20.6063 9.07396 21.3 11.5428 21.3 14.7562L21.2989 21.3042ZM5.55937 7.74271C4.3677 7.74271 3.41041 6.77812 3.41041 5.59167C3.41041 4.40625 4.36875 3.44271 5.55937 3.44271C6.74687 3.44271 7.70937 4.40625 7.70937 5.59167C7.70937 6.77812 6.74583 7.74271 5.55937 7.74271ZM7.41562 21.3042H3.70312V9.375H7.41562V21.3042ZM23.151 0H1.84479C0.824999 0 0 0.80625 0 1.80104V23.199C0 24.1947 0.824999 25 1.84479 25H23.1479C24.1667 25 25 24.1947 25 23.199V1.80104C25 0.80625 24.1667 0 23.1479 0H23.151Z" fill="white" />
                    </svg>
                </a>
            </div>
        </div >
    );
};

export default Header;