
// import Navbar from '../components/Navbar';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import { useEffect } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { FaSistrix } from "react-icons/fa";


const AnnuairePro = () => {
  useEffect(()=> {
		window.scrollTo(0,0)
	}, [])
  return (
	<div>
		<MyNavbar />
        <div className="s01 container">
            <form className="row d-flex justify-content-center mb-5">
                <fieldset>
                    <legend>DECOUVREZ NOS PARTENAIRES</legend>
                </fieldset>
                <div className="inner-form">
                    <div className="input-field first-wrap">
                        <input id="search" type="text" placeholder=" Que cherchez-vous?" />
                    </div>
                    <div className="input-field second-wrap">
                        {/* <input id="search" type="text" placeholder="Categorie" /> */}
                        <select type="text" id='subject' name='subject' placeholder='Selectioner votre service' >
                            <option value="" >Categorie</option>
                            <option value="Décret tertiaire Phase 1">Artisans</option>
                            <option value="Back Office CEE externalisé">Installateurs d'équipements</option>
                            <option value="Devis Gratuit">Bureaux d'études</option>
                            <option value="Cession des CEE">Solutions digitales</option>
                            <option value="Financement">Fournisseurs d'énergie</option>
                            <option value="Formation">Financeurs</option>
                        </select>
                    </div>
                    <div className="input-field third-wrap">
                        {/* <input id="location" type="text" placeholder="Région" /> */}
                        <select type="text" id='subject' name='subject' placeholder='Selectioner votre service' >
                            <option value="" >Région</option>
                            <option value="Décret tertiaire Phase 1">Auvergne-Rhône-Alpes</option>
                            <option value="Back Office CEE externalisé">Bourgogne-Franche-Comté</option>
                            <option value="Devis Gratuit">Bretagne</option>
                            <option value="Cession des CEE">Centre-Val de Loire</option>
                            <option value="Financement">Corse</option>
                            <option value="Formation">Grand Est</option>
                            <option value="Pré-étude">Hauts-de-France</option>
                            <option value="Pré-étude">Île-de-France</option>
                            <option value="Pré-étude">Normandie</option>
                            <option value="Pré-étude">Nouvelle-Aquitaine</option>
                            <option value="Pré-étude">Occitanie</option>
                            <option value="Pré-étude">Pays de la Loire</option>
                            <option value="Pré-étude">Provence-Alpes-Côte d'Azur</option>
                            <option value="Pré-étude">Guadeloupe</option>
                            <option value="Pré-étude">Martinique</option>
                            <option value="Pré-étude">Guyane</option>
                            <option value="Pré-étude">La Réunion</option>
                            <option value="Pré-étude">Mayotte</option>
                        </select>
                    </div>
                    {/* <div className="input-field second-wrap">
                        <input id="location" type="text" placeholder="location" />
                    </div> */}
                    <div className="input-field fourth-wrap">
                        <button className="btn-search" type="button">Search</button>
                    </div>
                </div>
            </form>
            
        </div>
        <div className="container content">
            <div className="row">

                <div className="card col-md-5 p-3 mt-5 ">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" src="images/Logo-taragroup.png"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <h4 className="card-title">Terra Groupe</h4>
                                <p className="card-text text-justify">Bureaux d'études</p>
                                <p className="card-text text-justify">Île-de-France</p>
                                {/* <p className="card-text text-justify">contact@terra-groupe.fr</p>
                                <p className="card-text text-justify"> 01 76 46 03 56</p> */}
                                <a href="https://terra-groupe.fr/" className="btn">Explorer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-5 p-3 mt-5">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" src="images/logo-sirce.png"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <h4 className="card-title">S.I.R.C.E Energie</h4>
                                <p className="card-text text-justify">Artisans</p>
                                <p className="card-text text-justify">Centre-Val de Loire</p>
                                {/* <p className="card-text text-justify">cee@sirceenergie.fr</p>
                                <p className="card-text text-justify"> 02.48.50.86.71</p> */}
                                <a href="https://sirceenergie.fr/" className="btn">Explorer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-5 p-3 mt-5 mb-5">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" src="images/logo-smart-watteo.png"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <h4 className="card-title">Smart Watteo</h4>
                                <p className="card-text text-justify">Bureaux d'études, Solutions digitales</p>
                                <p className="card-text text-justify">Île-de-France</p>
                                {/* <p className="card-text text-justify">contact@smartwatteo.fr</p>
                                <p className="card-text text-justify"> 06 29 30 68 72</p> */}
                                <a href="https://www.smartwatteo.fr/" className="btn">Explorer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        
           
        
        <Footer />

        
	</div>
  )
}

export default AnnuairePro