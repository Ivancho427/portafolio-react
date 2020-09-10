import React from 'react'
import { Button } from 'react-bootstrap'
import CV from '.././imagenes/CV Iván Darío Mejía Muñoz.pdf'


function Footer() {
    return (
        
        <section className="footer mt-5 mb-5" style={{backgroundColor: "#F5F5F5"}}>     
            <h3 id="mas-info"><span><strong>Mayor información: </strong></span></h3>
            <Button style={{ backgroundColor: "firebrick" }} className="boton_portafolio mt-5 mb-3" href="https://github.com/Ivancho427" id="proyectos"><h5>Todos los Proyectos</h5></Button><br/>          
            <Button  style={{ backgroundColor: "firebrick" }} id="boton-cv" href={CV} target="_blank" rel="noopener noreferrer" ><h5>CV Iván Darío Mejía</h5></Button>   
        </section>
    )
}

export default Footer
