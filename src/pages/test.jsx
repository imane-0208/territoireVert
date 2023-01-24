import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
// import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import MyNavbar from '../components/MyNavbar';
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import React from 'react'

const Test = () => {
  useEffect(()=> {
		window.scrollTo(0,0)
	}, [])
  return (
	<div>
		  <MyNavbar />
        <Sidebar />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
	</div>
  )
}

export default Test