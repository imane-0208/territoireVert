import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
		<div className='footer'>
			<div className='footer-center'>
				<img className='footer-logo' src="images/logo.png" alt="logo-img" />
				<p className='slogan'>Facilitateur de votre transition énergétique</p>
				<div className="social-link">
					<a href="https://www.linkedin.com/showcase/territoire-vert" target="_blank" rel="noreferrer" a> <BsLinkedin /></a>
				</div>
				<div className="links">
					<Link  className="link" to="/mention-legales" >Mentions légales</Link> |
					<Link className="link" to="/donnees-personnelles">Politique de confidentialité</Link>
				</div>
				<p>@Territoire Vert-2022</p>
			</div>
		</div>
  )
}

export default Footer