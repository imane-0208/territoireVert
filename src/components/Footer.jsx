import React from 'react'
import { Link } from 'react-router-dom'
// import { BsLinkedin} from 'react-icons/bs'
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
		<div className='footer-48201'>
			<div className="container">
					<div className="row">
					<div className="col-md-4 pr-md-5">
						<a href="#home" className="footer-site-logo d-block mb-4"><img src="images/big-logo.png" alt="" /></a>
						<p>Facilitateur de votre transition énergétique.</p>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
						<li><a href="#home">Accueil</a></li>
						<li><a href="#about">A propos</a></li>
						<li><a href="#works">Services</a></li>
						<li><a href="#contact">Contactez nous</a></li>
						</ul>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
						<li><Link to='/annuaire-des-pro' className='link'>Annuaire des pro</Link></li>
						<li><Link to='/' className='link'>Programme</Link></li>
						<li><Link  classNameName="link" to="/mention-legales" >Mentions légales</Link></li>
						<li><Link classNameName="link" to="/donnees-personnelles">Politique de confidentialité</Link></li>
						
						</ul>
					</div>
					<div className="col-md text-md-center">
						<ul className="social list-unstyled">
							<li><a className="icon" href="https://www.facebook.com/profile.php?id=100087160362666"><FaFacebookSquare/></a></li>
							<li><a className="icon" href="https://www.linkedin.com/showcase/territoire-vert"><FaLinkedin/></a></li>
						</ul>
						<p className=""><a href="#contact" className="btn btn-tertiary">Contactez nous</a></p>
					</div>
					</div> 

					<div className="row ">
					<div className="col-12 text-center">
						<div className="copyright mt-5 pt-5">
						<p><small>&copy; @Territoire Vert-2022</small></p>
						</div>
					</div>
					</div> 
				</div>

		</div>
  )
}

export default Footer