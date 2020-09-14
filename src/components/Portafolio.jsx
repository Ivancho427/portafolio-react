import React, { Component } from 'react'
import ImagenTributo from '.././imagenes/Tributo.png'
import ImagenEncuesta from '.././imagenes/Encuesta.png'
import ImagenRelojes from '.././imagenes/Landing Page.png'
import ImagenPrecios from '.././imagenes/Pagina Precios.png'
import { Button, Card, Col, Row } from 'react-bootstrap'


export default class Portafolio extends Component {
    render() {
        return (

        <section id="portafolio">
            <Card.Body className="desarrollador_web mt-5"><h1><span><strong>Desarrollador Web</strong></span></h1>
            <Card.Body className="desarro_web mt-3"><h3><span><strong>Proyectos realizados: </strong></span></h3>
            </Card.Body>
            </Card.Body>
            <Row>
                <Col>
                    <Card.Body ClassName="Cards mb-5" >
                        <Card.Img style={{ border: "2px solid rgb(67, 67, 168)"}} className="project-image mt-5 w-55 h-60" src={ImagenTributo} alt="Imagen Tributo" id="imagen-tributo" /><br /><br />
                        <Button style={{ backgroundColor: "rgb(67, 67, 168)", border: "3px solid white"  }} id="tributo" href="https://ivancho427.github.io/Pagina-Tributo/" target="_blank" rel="noopener noreferrer" ><h6 >Tributo</h6></Button>
                    </Card.Body></Col>

                <Col>
                    <Card.Body ClassName="Cards mb-5" >
                        <Card.Img style={{ border: "2px solid rgb(67, 67, 168)" }} className="project-image mt-5 w-55 h-60" src={ImagenEncuesta} alt="Imagen Encuesta" id="imagen-encuesta" /><br /><br />
                        <Button style={{ backgroundColor: "rgb(67, 67, 168)", border: "3px solid white" }} id="encuesta" href="https://ivancho427.github.io/Encuesta/" target="_blank" rel="noopener noreferrer" ><h6>Encuesta</h6></Button>
                    </Card.Body>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card.Body ClassName="Cards mb-5" >
                        <Card.Img style={{ border: "2px solid rgb(67, 67, 168)" }} className="project-image mt-5 w-55 h-60" src={ImagenRelojes} alt="Imagen Relojes" id="imagen-encuesta" /><br /><br />
                        <Button style={{ backgroundColor: "rgb(67, 67, 168)", border: "3px solid white" }} className="bot-relojes mb-5" id="relojes" href="https://ivancho427.github.io/Landing-Page/" target="_blank" rel="noopener noreferrer" ><h6>Relojes</h6></Button>
                    </Card.Body>
                </Col>

                <Col>
                    <Card.Body ClassName="Cards mb-5" >
                        <Card.Img style={{ border: "2px solid rgb(67, 67, 168)" }} className="project-image mt-5 w-55 h-60" src={ImagenPrecios} alt="Imagen Precios" id="imagen-precios" /><br /><br />
                        <Button style={{ backgroundColor: "rgb(67, 67, 168)", border: "3px solid white" }} className="bot-precios mb-5" id="precios" href="https://agileinnova.github.io/challenge-10-idmm-dams-equipo10/" target="_blank" rel="noopener noreferrer" ><h6>Precios</h6></Button>
                    </Card.Body>
                </Col>
            </Row>                
            </section>

        )
    }
}