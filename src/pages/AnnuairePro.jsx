
// import Navbar from "../components/Navbar";
import  {useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import { FaBuilding } from "react-icons/fa";



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
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [nom, setNom] = useState("") ;
    const [email, setEmail] = useState("");
    const [tele, setTele] = useState("");
    const [site, setSite] = useState("");
    const [description, setDescription] = useState("");
    


    // const PER_PAGE = 10;
    // const offset = currentPage * PER_PAGE;
    // const currentPageData = data
    //     .slice(offset, offset + PER_PAGE)
    //     .map(({ thumburl }) => <img src={thumburl} />);
    // const pageCount = Math.ceil(data.length / PER_PAGE);



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
      const dataNotFound = <p>not found</p>
       if (categoryId != "" && regionId != ""){

        await axios.get("http://127.0.0.1:8000/api/partenaire/", {
          params : {
            idCat : categoryId,
            idReg : regionId
          }
        }       
        )
        .then((response) => {
          if(response.data.data.length == 0){
            setPartenaires(dataNotFound);
          }else{
            console.log(response.data.data)
            setPartenaires(response.data.data);
            setCategoryId("")
            setRegionId("")
            
          }
              
          
        }).catch ((err) => {console.log(err)})

      }
      else  if (categoryId != "" && regionId == ""){
        await axios.get("http://127.0.0.1:8000/api/categories/partenaire/" + categoryId        
        )
          .then((response) => {
              
              setPartenaires(response.data.data);
              // setCategoryId("")
              
              
      }).catch ((err) => {console.log(err)})

      
      
      } else if (regionId != "" && categoryId == ""){
        await axios.get("http://127.0.0.1:8000/api/regions/partenaire/" + regionId        
          )
            .then((response) => {
              setPartenaires(response.data.data);
              // setRegionId("")

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


    const categoriesList =  categories.map((category) => {
      return {value : category.id , label : category.categoryName , key : "category" + category.id}
    })

    const regionsList =  regions.map((region) => {
      return {value : region.id , label : region.regionName , key : "region" + region.id}
    })

    //  console.log(selectedCategories)

    function handleSelectCategories(data) {
      setSelectedCategories(data);
    }

    function handleSelectRegions(data) {
      setSelectedRegions(data);
    }


    const createPartenaires = async () => {
      const catIdsArr = []
      const regIdsArr = []

      for (let i = 0; i < selectedCategories.length ; i++) {
        catIdsArr.push( selectedCategories[i].value  )
      }

      for (let i = 0; i < selectedRegions.length ; i++) {
        regIdsArr.push( selectedRegions[i].value  )
      }

      console.log(nom , email, catIdsArr, regIdsArr)
      await axios.post("http://127.0.0.1:8000/api/partenaire/create", 
           {
            nom : nom,
            email : email,
            tele : tele,
            site : site,
            description : description,
            categories : catIdsArr,
            regions : regIdsArr
            
          }
               
        )
        .then((response) => {
              
          setPartenaires(response.data.data);
          console.log (response.data.data)
          
          
        }).catch ((err) => {console.log(err)})
    }

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
      <>
      

        <div className="card col-md-5 p-2 mt-5 ">
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
      </>
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
                        <select type="text" id="subject" name="subject" onChange={(e)=>{setCategoryId(e.target.value), console.log(categoryId)}} placeholder="Selectioner votre service" >
                            <option value="" >Categorie</option>
                            {categoriesOptions}
                            {/* <option value="Décret tertiaire Phase 1">Artisans</option>
                            <option value="Back Office CEE externalisé">Installateurs d"équipements</option>
                            <option value="Devis Gratuit">Bureaux d"études</option>
                            <option value="Cession des CEE">Solutions digitales</option>
                            <option value="Financement">Fournisseurs d"énergie</option>
                            <option value="Formation">Financeurs</option> */}
                        </select>
                    </div>
                    <div className="input-field third-wrap">
                        {/* <input id="location" type="text" placeholder="Région" /> */}
                        <select type="text" id="subject" name="subject" onChange={(e)=>{setRegionId(e.target.value), console.log(regionId)}} placeholder="Selectioner votre service" >
                            <option value="" >Région</option>
                            {regionOptions}
                            {/* <option value="Décret tertiaire Phase 1">Auvergne-Rhône-Alpes</option>
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
                            <option value="Pré-étude">Provence-Alpes-Côte d"Azur</option>
                            <option value="Pré-étude">Guadeloupe</option>
                            <option value="Pré-étude">Martinique</option>
                            <option value="Pré-étude">Guyane</option>
                            <option value="Pré-étude">La Réunion</option>
                            <option value="Pré-étude">Mayotte</option> */}
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

            
            <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <form action="">
                    <div class="modal-content">
                      <div class="modal-header text-center">
                        <h4 class="modal-title w-100 font-weight-bold">S'inscrire</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body mx-3">
                        
                        <div class="md-form mb-4">
                        {/* <FaBuilding/> */}
                        {/* <i class="fa-solid fa-building"></i> */}
                          <input onChange={(e)=>{setNom(e.target.value)}} type="text" id="form34" placeholder="" class="form-control validate"/>
                          <label data-error="wrong" data-success="right" for="form34">Nom</label>
                        </div>

                        <div className="row">
                          <div class="col-6 md-form mb-4">
                              {/* <i class="fas fa-envelope prefix grey-text"></i> */}
                              <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="form29" class="form-control validate"/>
                              <label data-error="wrong" data-success="right" for="form29">Email</label>
                          </div>
                          <div class="col-6 md-form mb-4">
                            {/* <i class="fas fa-envelope prefix grey-text"></i> */}
                            <input onChange={(e)=>{setTele(e.target.value)}} type="text" id="form29" class="form-control validate"/>
                            <label data-error="wrong" data-success="right" for="form29">Téléphone</label>
                          </div>
                          
                        </div>

                        <div class="md-form mb-4">
                          {/* <i class="fas fa-tag prefix grey-text"></i> */}
                          <input onChange={(e)=>{setSite(e.target.value)}} type="text" id="form32" class="form-control validate"/>
                          <label data-error="wrong" data-success="right" for="form32">Site web</label>
                        </div>

                        <div className="row">
                          <div class="col-6 md-form mb-4">
                              {/* <i class="fas fa-envelope prefix grey-text"></i> */}
                              <Select
                                options={categoriesList}
                                placeholder="Categories"
                                value={selectedCategories}
                                onChange={handleSelectCategories}
                                isSearchable={true}
                                isMulti
                              />
                              
                          </div>
                          <div class="col-6 md-form mb-4">
                            {/* <i class="fas fa-envelope prefix grey-text"></i> */}
                            <Select
                                options={regionsList}
                                placeholder="Regions"
                                value={selectedRegions}
                                onChange={handleSelectRegions}
                                isSearchable={true}
                                isMulti
                              />
                            
                            
                          </div>
                          
                        </div>

                        <div class="md-form">
                          {/* <i class="fas fa-pencil prefix grey-text"></i> */}
                          <textarea onChange={(e)=>{setDescription(e.target.value)}} type="text" id="form8" class="md-textarea form-control" rows="4"></textarea>
                          <label data-error="wrong" data-success="right" for="form8">Description</label>
                        </div>

                      </div>
                      <div class="modal-footer d-flex justify-content-center">
                        <button class="btn btn-unique" type="submit" onClick={createPartenaires}>Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <a type="button" className="home-btn" data-bs-toggle="modal" data-bs-target="#modalContactForm">
                <a href="" >Je suis un artisan</a> 
              </a>




            
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
                                <p className="card-text text-justify">Bureaux d"études, Solutions digitales</p>
                                <p className="card-text text-justify">Île-de-France</p>
                                <p className="card-text text-justify">contact@smartwatteo.fr</p>
                                <p className="card-text text-justify"> 06 29 30 68 72</p>
                                <a href="https://www.smartwatteo.fr/" className="btn">Explorer</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                /> */}
                
                {partenaireCard}
            </div>            
        </div>
        
           
        
        <Footer />

        
  </div>
  )
}

export default AnnuairePro