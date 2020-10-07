import React from 'react'
// import ImagenFotoHV from '.././imagenes/Foto HV.png'
import Ivan from '.././imagenes/Ivan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5,faJs, faReact } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (

        <section className="header">
            <div id="Container-img" style={{opacity: "0.8"}}>
                <img className="imagen-header mt-5 rounded-circle" id="img" src={Ivan} alt="Foto Header" />

                <article>
                <div className="texto-header">
                    <h2 className="nombre mt-5">Iván Darío Mejía Muñoz</h2><hr/>
                    <h4 className="texto-desarrollador mt-4">Desarrollador Web</h4>
                    <p>Desarrollador Frontend con énfasis en Node/ReactJS - Ingeniero de Telecomunicaciones.<br/>
                    Apasionado por la tecnología y el mundo digital.</p><hr/>                     
                    <FontAwesomeIcon icon={faHtml5} style={{color:"#9b0909", fontSize:"35", marginLeft:"3"}} />
                    <FontAwesomeIcon icon={faCss3} style={{color:"#9b0909", fontSize:"35", marginLeft:"15"}} />
                    <FontAwesomeIcon icon={faJs} style={{color:"#9b0909", fontSize:"35", marginLeft:"15"}} />
                    <FontAwesomeIcon icon={faReact} style={{color:"#9b0909", fontSize:"35", marginLeft:"15"}} />
                        
                </div>  
                </article>

            </div>           
        </section>
    )
}

export default Header



