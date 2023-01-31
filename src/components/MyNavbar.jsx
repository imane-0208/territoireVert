import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MyNavbar = () => {
 
  return (

    <Navbar className="nav" bg="light" expand="lg">
      <Container className="nav-container">
        <Navbar.Brand href="#home" className='logo'><img src="images/big-logo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='' id="basic-navbar-nav">
          <Nav className="nav-links ms-auto">
            <Nav.Link className="link"><Link className="direction"  to="/">Accueil</Link></Nav.Link>
            <Nav.Link className="link"><Link className="direction"  to="/">Nos services</Link></Nav.Link>
            <Nav.Link className="link" ><Link className="direction"  to="/annuaire-des-pro">Annuaire des pro</Link></Nav.Link>
            <NavDropdown className="dropdown" title="Ressources" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown-item"><Link className="dropdown-link" to="../resources-batiment">Bâtiment</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" ><Link className="dropdown-link"  to="/resources-education-aux-economies-energie">Education aux économies d'énergie</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link className="dropdown-link"  to="/resources-industrie">Industrie</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link className="dropdown-link"  to="/resources-TPE-PME-PMI">TPE-PME/PMI</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link className="dropdown-link"  to="/resources-transports">Transports</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="link" href="#contact"><a href="#contact" className="direction">Me faire appeler</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar