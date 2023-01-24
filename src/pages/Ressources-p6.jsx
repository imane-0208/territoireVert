import Footer from '../components/Footer';
import MyNavbar from '../components/MyNavbar';
// import Navbar from '../components/Navbar';
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import React from 'react'

const Ressources6 = () => {
  useEffect(()=> {
		window.scrollTo(0,0)
	}, [])
  return (
	<div>
		<MyNavbar />

    <div className="s01 container">

    <h1 className="text-center">Programmes transition énergétique en France</h1>
            
            
    </div>
        

        <div className="container mb-5 ressources-content">

          <div className="row">
            <h1>Numérique</h1>
          
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          

        
        </div>
        
        <Footer />
	</div>
  )
}

export default Ressources6
