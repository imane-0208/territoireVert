import React from 'react'

const Home = () => {
  return (
	<div className='home' id='home'>
		<section className='home-center container'>
			<a href="#contact">
				{/* <h1>Confiez-nous votre déclaration sur OPERAT</h1> */}
				<h1>Décret tertiaire : <br /> Confiez-nous votre déclaration sur OPERAT</h1>
            </a>
		<button className="home-btn">
			<a href="#contact">Demander un devis</a>
		</button>
		</section>
	</div>
  )
}

export default Home