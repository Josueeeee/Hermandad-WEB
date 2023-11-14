import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/home.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/aboutUs.css'
import './styles/toggleCSS.css'
import Home from './routes/Home.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom'
import AboutUs from './routes/AboutUs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Proyects from './routes/Proyects'
AOS.init();
function App() {


  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='/proyectos' element={<Proyects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
