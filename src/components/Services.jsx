import React from "react"
import { services } from "../data"
import { useGlobalContext } from "../Context"


const Works = () => {
  const {setService} = useGlobalContext();

  return (
	<div className="works" id="works">
    <div className="works-center container reveal">
        <section className="section-title">
        <h1>Nos services</h1>
        </section>
        <div className="services">
          {services.map((service) => {
            const {id, title, text} = service
            return (
              <div className="service" key={id}>
                <a href="#contact">
                  <h2 onClick={()=> setService(title)}>{title}</h2>
                </a>
                <p>{text}</p>
              </div>
            )
          })}
          
        </div>

    </div>
  </div>
  )
}

export default Works