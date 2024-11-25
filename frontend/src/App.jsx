import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
    <div className="page text-white min-h-screen bg-zinc-900">
      
    <Navbar/>
    <Landing />
    <Marque />
    <About />
    <Eyes />
    <Feature />
    <Cards/>
    <Footer/>
    </div>
    </>
  )
}

export default App
