
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { useEffect } from 'react'
import React from 'react'


const AnnuairePro = () => {
  useEffect(()=> {
		window.scrollTo(0,0)
	}, [])
  return (
	<div>
		<Navbar />
        <div className="s01 container">
            <form>
                <fieldset>
                    <legend>DECOUVREZ NOS PARTENAIRES</legend>
                </fieldset>
                <div className="inner-form">
                    <div className="input-field second-wrap">
                        <input id="search" type="text" placeholder="Que cherchez-vous?" />
                    </div>
                    <div className="input-field second-wrap">
                        <input id="search" type="text" placeholder="Categorie" />
                    </div>
                    <div className="input-field second-wrap">
                        <input id="location" type="text" placeholder="Région" />
                    </div>
                    {/* <div className="input-field second-wrap">
                        <input id="location" type="text" placeholder="location" />
                    </div> */}
                    <div className="input-field third-wrap">
                        <button className="btn-search" type="button">Search</button>
                    </div>
                </div>
            </form>
        </div>

        
	</div>
  )
}

export default AnnuairePro