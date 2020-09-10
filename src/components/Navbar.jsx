import React from 'react';
import './style.css';
import * as ReactBootStrap from "react-bootstrap";

function Navbar() {
    return (       

        <div className="App">
            <ReactBootStrap.Navbar className="barra-nav w-100" style={{ backgroundColor: "firebrick", position: "fixed", opacity: "0.8" }} collapseOnSelect expand="lg" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#portafolio" id="proyectos">BIENVENIDO A MI PORTAFOLIO</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

            <ReactBootStrap.Nav className="mr-auto">
            </ReactBootStrap.Nav>

                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link style={{ color: "white"}} eventKey={2} href="#Container-img">INICIO</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{ color: "white"}} eventKey={2} href="#portafolio">PORTAFOLIO</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link style={{ color: "white"}} eventKey={2} href="#mas-info">CONTACTO</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    );
}

export default Navbar;