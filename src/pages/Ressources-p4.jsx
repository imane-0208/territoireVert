import React , {useState, useEffect } from "react"
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
// import Navbar from "../components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css"



const Ressources4 = () => {
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
            <h1>TPE-PME/PMI</h1>
          
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">BPI France - 2025</h2>
                  <p className="card-text">finance et accompagne les entreprises en crédit, garantie, aide à l"innovation et fonds propres à toutes les étapes de la transition écologique et énergétique, 
                  de l"innovation et des projets internationaux.</p>
                  <a href="https://www.bpifrance.fr/Toutes-nos-solutions/Prets/Prets-thematiques/Pret-Economies-d-Energie-PEE" className="btn ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">La Poste - 2025</h2>
                  <p className="card-text">Le programme est basé sur un système simple et rapide de visualisation de la consommation, 
                  de conseils personnalisés et de formation, destiné aux entreprises qui souhaitent mieux comprendre leur consommation et prendre 
                  rapidement les premières mesures d"économie d"énergie.</p>
                  <a href="https://baisseleswatts.fr/" className="btn ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
          </div>

          
          
          

        
        </div>
        
        <Footer />
	</div>
  )
}

export default Ressources4
// import "./styles/index.scss";
// import { BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";



// function App() {
//   return (
//     <>
//       <Navbar/>
//       <BrowserRouter>
//         <Route path="/" component={Main} exact/>
//         <Route path="/mention-legales" component={MentionLegal} exact/>
//         <Route path="/donnees-personnelles" component={PrivacyPolicy} exact/>
//         <Route path="/annuaire-des-pro" component={AnnuairePro} exact/>
//       </BrowserRouter>
//       <Footer/>
//     </>
//   );
// }

// export default App;
