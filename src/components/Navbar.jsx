import React from 'react';
import './style.css';
// import * as ReactBootStrap from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap'

function Navegacion() {
    return (       
  
<Navbar className="navbar w-100
" style={{ backgroundColor: "firebrick", opacity: "0.9"  }} expand="lg" >
  <Navbar.Brand style={{ color: "white"}} href="#portafolio">BIENVENIDO A MI PORTAFOLIO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link style={{ color: "white"}} eventKey={2} href="#Container-img">INICIO</Nav.Link>
      <Nav.Link style={{ color: "white"}} eventKey={2} href="#portafolio">PORTAFOLIO</Nav.Link>
      <Nav.Link style={{ color: "white"}} eventKey={2} href="#mas-info">CONTACTO</Nav.Link>
    </Nav>   
  </Navbar.Collapse>
</Navbar>
        
            // <ReactBootStrap.Navbar className="barra-nav w-100" style={{ backgroundColor: "firebrick", position: "fixed", opacity: "0.8" }} collapseOnSelect expand="lg sm" variant="dark">
            //     <ReactBootStrap.Navbar.Brand href="#portafolio" id="proyectos">BIENVENIDO A MI PORTAFOLIO</ReactBootStrap.Navbar.Brand>
            //     <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //     <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

            // <ReactBootStrap.Nav className="mr-auto">
            // </ReactBootStrap.Nav>

            //     <ReactBootStrap.Nav>
            //         <ReactBootStrap.Nav.Link style={{ color: "white"}} eventKey={2} href="#Container-img">INICIO</ReactBootStrap.Nav.Link>
            //         <ReactBootStrap.Nav.Link 
            //         <ReactBootStrap.Nav.Link style={{ color: "white"}} eventKey={2} href="#mas-info">CONTACTO</ReactBootStrap.Nav.Link>
            //         </ReactBootStrap.Nav>
            //     </ReactBootStrap.Navbar.Collapse>
            // </ReactBootStrap.Navbar>

    );
}

export default Navegacion;