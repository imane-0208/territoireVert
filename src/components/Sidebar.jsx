import React from 'react'
import { links } from '../data'
import { FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../Context'

const Sidebar = () => {
  const {isSidebarOpen, closeSideBar, SetIsSidebarOpen} = useGlobalContext();
  
  const handelClick = (e) =>{
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0, 
      top: location - 60
    })
    SetIsSidebarOpen(!isSidebarOpen)
  }



  return (
	<div className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`} onClick={closeSideBar}>
    <FaTimes className='close-icon' onClick={ closeSideBar} />
    <ul className='side-links'>
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
  </div>
  )
}

export default Sidebar