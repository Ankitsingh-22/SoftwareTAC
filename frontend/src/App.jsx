import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marque from './components/Marque';
import About from './components/About';
import AboutUsSection from './components/AboutUs';
import TeamSection from './components/Team';
import Feature from './components/Feature';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="page text-white min-h-screen bg-zinc-900">
        <Navbar />
        <Landing />
        <Marque />
        <About />
        <AboutUsSection />
        <TeamSection />
        <Feature />
        <ContactUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
