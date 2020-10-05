import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Row, Col} from 'react-bootstrap'

import CV from '.././imagenes/CV Iván Darío Mejía Muñoz.pdf';


function Footer() {
    return (
      
<section className="footer mt-5 mb-4" style={{backgroundColor: "#F5F5F5"}}> 
    <div className="container-fluid">
        <h3 className="mas_inform mb-5" id="mas-info"><span><strong>Más información</strong></span></h3>
            <Row className="redes-sociales">  
  
                <a className="boton_portafolio mt-5 mb-3" href="https://github.com/Ivancho427" target="_blank" rel="noopener noreferrer" id="proyectos">
                <FontAwesomeIcon icon={faGithub} style={{color:"#9b0909", fontSize:"40"}} /></a>
                
                <a className="boton_portafolio mt-5 mb-3" href="https://linkedin.com/in/iván-darío-mejía-muñoz-408b53162" target="_blank" rel="noopener noreferrer" id="proyectos">
                <FontAwesomeIcon icon={faLinkedin} style={{color:"#9b0909", fontSize:"40"}} /></a>
                <h5 style={{color:"#9b0909"}}>

                <a  href="#"> 
                <FontAwesomeIcon className="whatsapp_ mt-4"icon={faWhatsapp} style={{color:"#9b0909", fontSize:"40"}} /></a><h5></h5>3007897403</h5>
        
                <a className="boton-cv mb-3 mt-5" style={{ backgroundColor: "white", color:  "#9b0909" }} id="boton-cv" href={CV} target="_blank" rel="noopener noreferrer" size="sm" ><h5>CV - Iván Darío Mejía</h5></a>

            </Row>
            
            <h5 className="hecho-por" style={{color:"#9b0909"}} >Medellín | Colombia | © 2020 | Hecho por Iván Darío Mejía Muñoz.</h5>

       </div>
</section>

    )
}

export default Footer


