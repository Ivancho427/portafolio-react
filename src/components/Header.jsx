import React from 'react'
import { Card } from 'react-bootstrap'

function Header() {
    return (

         <section className="header" style={{ opacity:"0.8"}}>          
            <Card.Body className="desarrollador_web " style={{height: "400px"}}></Card.Body>
            <Card.Body className="texto-desa mb-3 ml-5" style={{ color: "white", textAlign:"initial" , opacity: "0.7"}} ><h1><span><strong><em>Desarrollador Web</em></strong></span></h1>
            <h2 className="texto-desa mb-5 "><span><em>Bienvenido a mi portafólio</em></span></h2>
            </Card.Body>
            
        </section>
    )
}

export default Header





