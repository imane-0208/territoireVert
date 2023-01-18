import React from 'react'
// import { links } from '../data'
import { Link } from "react-router-dom";
import { GiHamburgerMenu}  from 'react-icons/gi'
import { useGlobalContext } from '../Context'

const Navbar = () => {
  const {openSideBar} = useGlobalContext();

  //  
  return (
    <nav>
      <div className='navbar container'>
        <h1 >
          <a href='#home' className="logo">
            <img src="images/logo.png" alt="logo" />
          </a>
        </h1>
        <ul className='nav-links'>
          <a href='/' className='link'>Accueil</a>
          <a href='#works' className='link'>Nos services</a>
          <Link to='/annuaire-des-pro' className='link'>Annuaire des pro</Link>
          <Link to='/' className='link'>Programme</Link>
          <a href='#contact' className='link'>Me faire appeler</a>

          {/* {links.map((link) =>{
            const {id, text, url} = link;
            return(
              <Link to={url} 
              key={id}
              className='link'
              onClick={handelClick}
              >{text}</Link>
            )
          })} */}
        </ul>
        <GiHamburgerMenu className='burger' onClick={ openSideBar}/>
    </div>
    </nav>
  )
}

export default Navbar