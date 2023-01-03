import React from 'react'
import { links } from '../data'
import { GiHamburgerMenu}  from 'react-icons/gi'
import { useGlobalContext } from '../Context'

const Navbar = () => {
  const {openSideBar} = useGlobalContext();

  const handelClick = (e) =>{
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0, 
      top: location - 60
    })
  }
  return (
    <nav>
      <div className='navbar container'>
        <h1 >
          <a href='#home' className="logo">
            <img src="images/logo.png" alt="logo" />
          </a>
        </h1>
        <ul className='nav-links'>
          {links.map((link) =>{
            const {id, text, url} = link;
            return(
              <a href={url} 
              key={id}
              className='link'
              onClick={handelClick}
              >{text}</a>
            )
          })}
        </ul>
        <GiHamburgerMenu className='burger' onClick={ openSideBar}/>
    </div>
    </nav>
  )
}

export default Navbar