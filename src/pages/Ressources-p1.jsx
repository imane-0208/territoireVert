import React , {useState, useEffect } from 'react'
import Footer from '../components/Footer';
import MyNavbar from '../components/MyNavbar';
// import Navbar from '../components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css'



const Ressources1 = () => {
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
            <h1>FORMATION</h1>
          
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">ATEE/AQC - 2025</h2>
                  <p className="card-text">programme national de soutien à la transition écologique et
                  énergétique des bâtiments publics et privés, les copropriétés et 
                  les logements sociaux, les bâtiments industriels et les bâtiments agricoles.</p>
                  <a href="http://www.feebat.org/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Ile-de-France Energies - 2023</h2>
                  <p className="card-text">service de gestion de copropriété en ligne pour les copropriétaires et 
                  les syndics de copropriété. vise à faciliter les démarches administratives et 
                  les processus de gestion pour les copropriétés.</p>
                  <a href="http://www.recif-copro.fr/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5 ">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Association Française du Froid (AFF) - 2023</h2>
                  <p className="card-text">programme vise à promouvoir des solutions écologiques et économiques pour 
                  réduire l'impact environnemental 
                  des activités des entreprises et des collectivités territoriales.</p>
                  <a href="https://www.programme-climeco.fr/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h1>Innovation</h1>
          
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">AQC - 2024</h2>
                  <p className="card-text">Programme concrétise l'engagement de la filière bâtiment à contribuer à la  nécessaire 
                  accélération et fiabilisation des rénovation énergétique.</p>
                  <a href="http://www.programmeprofeel.fr/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h1>Massification</h1>
          
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Institut Negawatt - 2024</h2>
                  <p className="card-text">projet de rénovation énergétique destiné aux propriétaires occupants de logements individuels en région Nouvelle-Aquitaine, visant à les 
                  aider à réaliser des travaux d'amélioration énergétique tout en réduisant leur facture énergétique.</p>
                  <a href="http://www.facilareno.fr/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">FNCCR - 2023</h2>
                  <p className="card-text">Le programme vise à aider les entreprises et les particuliers à réduire leur consommation d'énergie en financant des projets d'amélioration énergétique.</p>
                  <a href="http://www.programme-cee-actee.fr/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">ADEME - 2024</h2>
                  <p className="card-text">programme destiné aux collectivités pour les aider à mettre en place des projets de rénovation énergétique ambitieux et adaptés aux besoins de leur territoire, en leur apportant un soutien technique et financier pour la réalisation de ces projets.</p>
                  <a href="https://expertises.ademe.fr/professionnels/collectivites/sare-service-daccompagnement-a-renovation-energetique" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">SGFGAS -2024</h2>
                  <p className="card-text">programme destiné aux particuliers propriétaires occupants ou bailleurs d'un logement achevé depuis plus de 2 ans, pour les aider à financer des travaux de rénovation énergétique en leur offrant une garantie de prêt auprès des banques et établissements de crédit pour les aider à obtenir des financements pour ces travaux.</p>
                  <a href="https://www2.sgfgas.fr/web/site-public/fgre" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5 ">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">ECO CO2 - 2024</h2>
                  <p className="card-text">programme destiné aux particuliers propriétaires occupants d'un logement achevé depuis plus de 2 ans en région Nouvelle-Aquitaine, pour les aider à réduire leur consommation d'énergie et leurs émissions de GES en leur offrant un accompagnement technique et financier pour la mise en place de projets de rénovation énergétique de leur logement.</p>
                  <a href="https://seize-maitrise-energie.fr/programme/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">ATEE - 2024</h2>
                  <p className="card-text">programme pour financer des projets de recherche et développement en matière de technologies propres et durables. Il vise à soutenir les entreprises dans leur transition vers une économie plus respectueuse de l'environnement.</p>
                  <a href="https://programme-oscar-cee.fr/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h1>Précarité</h1>
          
            <div className="col-sm-12 mt-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">CLER - 2025</h2>
                  <p className="card-text">programme vise à aider les entreprises à devenir plus écologiques et durables 
                  en utilisant des technologies innovantes 
                  pour réduire leur impact environnemental.</p>
                  <a href="http://www.lesslime.fr/" className="btn  ">Decouvrez le programme</a>
                </div>
              </div>
            </div>
          </div>
          

        
        </div>
        
        <Footer />
	</div>
  )
}

export default Ressources1

