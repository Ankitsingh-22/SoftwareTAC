import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
//import Eyes from './components/Eyes'
import Feature from './components/Feature'
//import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import ContactUs from './components/ContactUs.jsx'
import AboutUsSection from './components/AboutUs.jsx'
import TeamSection from './components/Team.jsx'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
    <div className="page text-white min-h-screen bg-zinc-900">
      
    <Navbar/>
    <Landing />
    <Marque />
    <About />
   
    <AboutUsSection />
    <TeamSection />
    <Feature />
   
    <ContactUs />
    <Footer/>
    </div>
    </>
  )
}

export default App
