import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
// import { useGlobalContext } from '../Context'


const Contact = () => {
    const form = useRef();
    // const {service} = useGlobalContext()

    
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_5xiocum', 'template_lhpzudv', form.current, 'HUgVHHUAN5bWJ2zej')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
      const notification = document.querySelector('.sent-notification').classList;
      notification.add('show-sent-notification');  
      setTimeout(() => {
        notification.remove('show-sent-notification')
      }, 2000);
    };


  return (
	<div className='contact' id='contact'>
    <div className="contact-center container reveal">
      <section className="section-title">
          <h1>Parlons de vos projets!</h1>
        </section>
      <div className="form-container">
      <form className='form' ref={form} onSubmit={sendEmail}>
      <p className="sent-notification">
      Votre email a été bien envoyer
      </p>
          <select type="text" id='subject' name='subject' placeholder='Selectioner votre service' required>
            <option value="" >Selectioner votre service</option>
            <option value="Décret tertiaire Phase 1">Décret tertiaire Phase 1</option>
            <option value="Back Office CEE externalisé">Back Office CEE externalisé</option>
            <option value="Devis Gratuit">Devis Gratuit</option>
            <option value="Cession des CEE">Cession des CEE</option>
            <option value="Financement">Financement</option>
            <option value="Formation">Formation</option>
            <option value="Pré-étude">Pré-étude</option>
          </select>
          
          <input type="text" id='family-name' name='family-name' placeholder='Nom'  required/>
          <input type="email" id='email' name='email' placeholder='Email'  required/>
          <input type="number" id='phone' name='phone' placeholder='Téléphone'  required/>
          <textarea id='message' rows='8' name='message' placeholder='A votre ecoute'  required></textarea>
          <div className="aprouve">
            <input type="checkbox" id='check-box' name='aprouve' required/>
            <label htmlFor="aprouve">J'accepte que les informations saisies dans ce formulaire soient exploitées pour répondre à ma demande.</label>
          </div>
            <button className="submit-btn" type='submit'>Envoyer</button>
      </form>
      </div>
    </div>
  </div>
  )
}

export default Contact