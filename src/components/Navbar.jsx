import React from "react"
// import { links } from "../data"
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import { GiHamburgerMenu}  from "react-icons/gi"
import { useGlobalContext } from "../Context"
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";


const Navbar = () => {
  const {openSideBar} = useGlobalContext();

  //  
  return (

    // <Navbar className="" bg="light" expand="lg">
    //   <Container className="">
    //     <Navbar.Brand href="#home" className="logo"><img src="images/big-logo.png" alt="logo" /></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link className="link" href="#home">Home</Nav.Link>
    //         <Nav.Link className="link" href="#link">Link</Nav.Link>
    //         <NavDropdown className="link" title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid ">
    //     <a className="navbar-brand logo" href="#home"><img src="images/big-logo.png" alt="logo" /></a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav nav-link me-auto mb-2 mb-lg-0 ">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li><a className="dropdown-item" href="#">Action</a></li>
    //             <li><a className="dropdown-item" href="#">Another action</a></li>
    //             <li><hr className="dropdown-divider"/></li>
    //             <li><a className="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link " href="#" tabindex="-1">Disabled</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex">
            
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
    <nav >
      <div className="navbar container">
        <h1 >
          <a href="#home" className="logo">
            <img src="images/big-logo.png" alt="logo" />
          </a>
        </h1>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div id="navbarSupportedContent"> */}
        <ul className="nav-links" >
          <a href="/" className="link">Accueil</a>
          <a href="#works" className="link">Nos services</a>
          <Link to="/annuaire-des-pro" className="link">Annuaire des pro</Link>
          <div class="dropdown">
            <a class=" dropdown-toggle link" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Ressources
            </a>
            <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
              <li><Link class="dropdown-item" to="/resources-batiment">Bâtiment</Link></li>
              <li><Link class="dropdown-item" to="/resources-education-aux-economies-energie">Education aux économies d"énergie</Link></li>
              <li><Link class="dropdown-item" to="/resources-industrie">Industrie</Link></li>
              <li><Link class="dropdown-item" to="/resources-TPE-PME-PMI">TPE-PME/PMI</Link></li>
              <li><Link class="dropdown-item" to="/resources-transports">Transports</Link></li>
              {/* <li><a class="dropdown-item" href="/resources-numerique">Numérique</a></li> */}
            </ul>
          </div>

              
          
          <a href="#contact" className="link">Me faire appeler</a>

          {/* {links.map((link) =>{
            const {id, text, url} = link;
            return(
              <Link to={url} 
              key={id}
              className="link"
              onClick={handelClick}
              >{text}</Link>
            )
          })} */}
        </ul>
        </div>
        <GiHamburgerMenu className="burger" onClick={ openSideBar}/>
    {/* </div> */}
    </nav>
  )
}

export default Navbar