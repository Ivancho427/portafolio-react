import React from 'react'
import CV from '.././imagenes/CV Iván Darío Mejía Muñoz.pdf'


function Footer() {
    return (
           
<section className="footer mt-5 mb-5" style={{backgroundColor: "#F5F5F5"}}>     
    <h3 className="mb-5" id="mas-info"><span><strong>Más información<br/> en los siguientes enlaces: </strong></span></h3>            
        <a style={{ backgroundColor: "white", color: "rgb(67, 67, 168)" }} className="boton_portafolio mt-5 mb-3" href="https://github.com/Ivancho427" target="_blank" rel="noopener noreferrer" id="proyectos"><h5>TODOS LOS PROYECTOS</h5></a><br/>
        <a style={{ backgroundColor: "white", color: "rgb(67, 67, 168)" }} id="boton-cv" href={CV} target="_blank" rel="noopener noreferrer" size="sm" ><h5>CV  - IVÁN DARÍO MEJÍA MUÑOZ</h5></a>   
</section>

    )
}

export default Footer


