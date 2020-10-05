import React, { Component } from 'react'
import ImagenTributo from '.././imagenes/Tributo.png'
import ImagenEncuesta from '.././imagenes/Encuesta.png'
import ImagenRelojes from '.././imagenes/Landing Page.png'
import ImagenPrecios from '.././imagenes/Pagina Precios.png'
import ImagenQuotes from '.././imagenes/Quotes.png'
import ImagenCalculadora from '.././imagenes/Calculadora.png'
import { Card, Row } from 'react-bootstrap'


export default class Portafolio extends Component {
    render() {
        return (

        <section className="portafolio w-100">

            <Card.Body className="desarro_web mt-3"><h3><span><strong>Proyectos </strong></span></h3>
            </Card.Body>         

            <Row>  
                <div class="banner">
                    <img src={ImagenTributo} alt="Imagen Tributo" />
                    <h1>Página Tributo</h1>
                    <p>Página tributo a Atletico Nacional</p>
                    <a href="https://ivancho427.github.io/Pagina-Tributo/" target="_blank" rel="noopener noreferrer">Ver página</a>
                </div>

                <div class="banner">
                    <img src={ImagenEncuesta} alt="Imagen Encuesta" />
                    <h1>Página Encuesta</h1>
                    <p>Página simulacro de encuesta</p>
                    <a href="https://ivancho427.github.io/Encuesta" target="_blank" rel="noopener noreferrer">Ver página</a>
                </div>

                <div class="banner">
                    <img src={ImagenRelojes} alt="Imagen Relojes" />
                    <h1>Página Relojes</h1>
                    <p>Página aterrizaje o Landing page</p>
                    <a href="https://ivancho427.github.io/Landing-Page" target="_blank" rel="noopener noreferrer">Ver página</a>
                </div>
            </Row>  

           <Row>  
                <div class="banner">
                    <img src={ImagenPrecios} alt="Imagen Precios" />
                    <h1>Página Precios</h1>
                    <p>Página simulación de precios</p>
                    <a href="https://agileinnova.github.io/challenge-10-idmm-dams-equipo10" target="_blank" rel="noopener noreferrer">Ver página</a>
                </div>

                <div class="banner">
                    <img src={ImagenQuotes} alt="Imagen Quotes" />
                    <h1>Página Citas</h1>
                    <p>Página de frases y sus autores</p>
                    <a href="https://randon-quote-machine-git-master.ivancho427.vercel.app/" target="_blank" rel="noopener noreferrer">Ver página</a>
                </div>

                <div class="banner">
                    <img src={ImagenCalculadora} alt="Imagen Calculadora" />
                    <h1>Página Calculadora</h1>
                    <p>Página simulación calculadora</p>
                    <a href="https://calculator.ivancho427.vercel.app" target="_blank" rel="noopener noreferrer">Ver página</a>
                </div>
           </Row>        

        </section>

        )
    }
}