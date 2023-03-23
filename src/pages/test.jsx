import React , {useState, useEffect } from "react"
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import MyNavbar from "../components/MyNavbar";

import "bootstrap/dist/css/bootstrap.min.css"



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