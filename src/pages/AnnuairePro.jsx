
// import Navbar from '../components/Navbar';
import  {useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";



const AnnuairePro = () => {
    useEffect(()=> {
        getCategories();
        getRegions();
        getPartenaires();
        // filterHandler();
      window.scrollTo(0,0)
    }, [])

    const [categories,  setCategories] = useState([]);
    const [regions,  setRegions] = useState([]);
    const [partenaires,  setPartenaires] = useState([]);
    const [partenaireCategories,  setPartenaireCategories] = useState([]);
    const [categoryId,  setCategoryId] = useState("");
    const [regionId,  setRegionId] = useState([]);
    const [partenaireSearch,  setPartenaireSearch] = useState("");



    const getCategories = async () => {
        // const arr = []
        await axios.get("http://127.0.0.1:8000/api/categories")
            .then((response) => {
                // arr = response.data;
                // const myData = response.data
                setCategories(response.data.data);
        
                // console.log(response.data.data);
                // console.log(myData.data);
                
                
        }).catch ((err) => {console.log(err)})
    }

    const getRegions = async () => {
      // const arr = []
      await axios.get("http://127.0.0.1:8000/api/regions")
          .then((response) => {
              
              setRegions(response.data.data);
      
              
              
      }).catch ((err) => {console.log(err)})
    }

    const getPartenaires = async () => {
      // const arr = []
      await axios.get("http://127.0.0.1:8000/api/partenaires")
          .then((response) => {
             
              setPartenaires(response.data.data);
    
      }).catch ((err) => {console.log(err)})
    }

    const filterHandler = async () => {
      // console.log("categoryId :", categoryId)
      if (categoryId != ""){
        await axios.get("http://127.0.0.1:8000/api/categories/partenaire/" + categoryId        
        )
          .then((response) => {
              
              setPartenaires(response.data.data);
              setCategoryId("")
              
              
      }).catch ((err) => {console.log(err)})

      
      
      } else if (regionId != ""){
        await axios.get("http://127.0.0.1:8000/api/regions/partenaire/" + regionId        
          )
            .then((response) => {
              setPartenaires(response.data.data);
              setRegionId("")

            })

    
      }
      
    }


    const categoriesOptions = categories.map((category) => {
      return (
        <option key={"category"+category.id} value={category.id}>{category.categoryName}</option>
      )

    })

    const regionOptions = regions.map((region) => {
      return (
        <option key={"region"+region.id} value={region.id}>{region.regionName}</option>
      )

    })

    const partenaireCard = partenaires.filter(value =>{
      if (partenaireSearch === ""){
        return value
      } else if (value.description.toLowerCase().includes(partenaireSearch.toLowerCase())){
        return value
      }
    }).map((partenaire) => {
      const pCategories = partenaire.categories
      const pRegions = partenaire.regions
      // console.log(partenaire.id,pCategories)
      return (
        <div className="card col-md-5 p-3 mt-5 mb-5">
            <div className="row ">
                <div className="col-md-4">
                    <img className="w-100" src={"http://127.0.0.1:8000" + partenaire.img_path }/>
                </div>
                <div className="col-md-8">
                    <div className="card-block" id={partenaire.id}>
                        <h4 className="card-title">{partenaire.nom}</h4>
                        <h5 className="card-text text-justify">{pCategories.map((category) => {
                          return(
                            <span>{category.categoryName + ", "}</span>
                          )
                          
                        })}</h5>
                        <h5 className="card-text text-justify">{pRegions.map((region) => {
                          return(
                            <span>{region.regionName + ", "}</span>
                          )
                          
                        })}</h5>
                        <p className="card-text text-justify">{partenaire.description}</p>
                        {/* <p className="card-text text-justify"> 06 29 30 68 72</p> */}
                        <a href={partenaire.site} className="btn">Explorer</a>
                    </div>
                </div>
            </div>
        </div>
      )

    })
    



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
                        <input onChange={(e)=>{setPartenaireSearch(e.target.value), console.log(partenaireSearch)}} id="search" type="text" placeholder=" Que cherchez-vous?" />
                    </div>
                    <div className="input-field second-wrap">
                        {/* <input id="search" type="text" placeholder="Categorie" /> */}
                        <select type="text" id='subject' name='subject' onChange={(e)=>{setCategoryId(e.target.value), console.log(categoryId)}} placeholder='Selectioner votre service' >
                            <option value="" >Categorie</option>
                            {categoriesOptions}
                            {/* <option value="D??cret tertiaire Phase 1">Artisans</option>
                            <option value="Back Office CEE externalis??">Installateurs d'??quipements</option>
                            <option value="Devis Gratuit">Bureaux d'??tudes</option>
                            <option value="Cession des CEE">Solutions digitales</option>
                            <option value="Financement">Fournisseurs d'??nergie</option>
                            <option value="Formation">Financeurs</option> */}
                        </select>
                    </div>
                    <div className="input-field third-wrap">
                        {/* <input id="location" type="text" placeholder="R??gion" /> */}
                        <select type="text" id='subject' name='subject' onChange={(e)=>{setRegionId(e.target.value), console.log(regionId)}} placeholder='Selectioner votre service' >
                            <option value="" >R??gion</option>
                            {regionOptions}
                            {/* <option value="D??cret tertiaire Phase 1">Auvergne-Rh??ne-Alpes</option>
                            <option value="Back Office CEE externalis??">Bourgogne-Franche-Comt??</option>
                            <option value="Devis Gratuit">Bretagne</option>
                            <option value="Cession des CEE">Centre-Val de Loire</option>
                            <option value="Financement">Corse</option>
                            <option value="Formation">Grand Est</option>
                            <option value="Pr??-??tude">Hauts-de-France</option>
                            <option value="Pr??-??tude">??le-de-France</option>
                            <option value="Pr??-??tude">Normandie</option>
                            <option value="Pr??-??tude">Nouvelle-Aquitaine</option>
                            <option value="Pr??-??tude">Occitanie</option>
                            <option value="Pr??-??tude">Pays de la Loire</option>
                            <option value="Pr??-??tude">Provence-Alpes-C??te d'Azur</option>
                            <option value="Pr??-??tude">Guadeloupe</option>
                            <option value="Pr??-??tude">Martinique</option>
                            <option value="Pr??-??tude">Guyane</option>
                            <option value="Pr??-??tude">La R??union</option>
                            <option value="Pr??-??tude">Mayotte</option> */}
                        </select>
                    </div>
                    {/* <div className="input-field second-wrap">
                        <input id="location" type="text" placeholder="location" />
                    </div> */}
                    <div className="input-field fourth-wrap">
                        <button className="btn-search" type="button" onClick={filterHandler}>Search</button>
                    </div>
                </div>
            </form>
            
        </div>
        <div className="container content">
            <div className="row">

                
                
                {/* <div className="card col-md-5 p-3 mt-5 mb-5">
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-100" src="images/logo-smart-watteo.png"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-block">
                                <h4 className="card-title">Smart Watteo</h4>
                                <p className="card-text text-justify">Bureaux d'??tudes, Solutions digitales</p>
                                <p className="card-text text-justify">??le-de-France</p>
                                <p className="card-text text-justify">contact@smartwatteo.fr</p>
                                <p className="card-text text-justify"> 06 29 30 68 72</p>
                                <a href="https://www.smartwatteo.fr/" className="btn">Explorer</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                {partenaireCard}
            </div>            
        </div>
        
           
        
        <Footer />

        
  </div>
  )
}

export default AnnuairePro