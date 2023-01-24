import Footer from '../components/Footer';
import MyNavbar from '../components/MyNavbar';
// import Navbar from '../components/Navbar';
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import React from 'react'

const Ressources2 = () => {
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
            <h1>Education aux économies d'énergie</h1>
          
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Eco CO2 - 2023</h2>
                  <p className="card-text">offre des solutions pour améliorer efficacité energétique et la mobilité durable des entreprises pour être plus éco-responsables en leur permettant de surveiller et optimiser leur consommation d'énergie.</p>
                  <a href="https://www.watty.fr/" className="btn ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
          </div>

          
          

        
        </div>
        
        <Footer />
	</div>
  )
}

export default Ressources2
