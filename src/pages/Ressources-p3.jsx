import React , {useState, useEffect } from "react"
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
// import Navbar from "../components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css"



const Ressources3 = () => {
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
            <h1>Industrie</h1>
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">ATEE - 2023</h2>
                  <p className="card-text">organisme de formation aidant les professionnels et les entreprises à améliorer l"efficacité énergétique et 
                  l"utilisation des énergies renouvelables pour être plus éco-responsables dans leur activité.</p>
                  <a href="https://www.prorefei.org/" className="btn ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      <Footer />
	</div>
  )
}

export default Ressources3
