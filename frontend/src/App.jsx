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
import AboutUsSection from './components/whoweare.jsx'
import Services from './components/Services.jsx'
import New from './components/Whychoose.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <>
    <Router>

    <div className="page text-white min-h-screen bg-black">
      
    <Navbar/>
    <Landing />
    <About />
    <Services />
    <New />
   
    <AboutUsSection />
    <Feature />
   
    <Marque />
    <ContactUs />
    <Footer/>
    </div>
    </Router>
    </>
  )
}

export default App
