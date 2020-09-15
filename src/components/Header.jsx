import React from 'react'
// import ImagenHeader from '.././imagenes/Header.jpg'
import ImagenFotoHV from '.././imagenes/Foto HV.png'

function Header() {
    return (

        <section className="header">
            <div id="Container-img" style={{opacity: "0.8"}}>
                <img className="imagen-header mt-5" id="img" src={ImagenFotoHV} alt="Foto Header" />

                <article>
                <div className="texto-header">
                    <h2 className="nombre mt-5">Iván Darío Mejía Muñoz</h2><hr/>
                    <h4 className="texto-desarrollador mt-4">Desarrollador Web</h4>
                    <p>Desarrollador Frontend con énfasis en Node/ReactJS - Ingeniero de Telecomunicaciones.<br/>
                    Apasionado por la tecnología y el mundo digital.</p><hr/> 
                        
                </div>  
                </article>

            </div>           
        </section>
    )
}

export default Header



