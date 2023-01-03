import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import { useEffect } from 'react'


import React from 'react'

const Main = () => {
  useEffect(()=> {
		window.scrollTo(0,0)
	}, [])
  return (
	<div>
		  <Navbar />
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
	</div>
  )
}

export default Main