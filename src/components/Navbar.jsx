import React from 'react';
import './style.css';

import { Nav, Navbar } from 'react-bootstrap'

function Navegacion() {
    return (       
  
<Navbar className="navbar w-100" style={{ opacity: "0.9"  }} expand="lg" >
  <Navbar.Brand style={{ color: "white"}} href="#portafolio">BIENVENIDO A MI PORTAFOLIO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav >
      <Nav.Link  style={{ color: "white"}} eventKey={2} href="#Container-img">INICIO</Nav.Link>
      <Nav.Link  style={{ color: "white"}} eventKey={2} href="#portafolio">PORTAFOLIO</Nav.Link>
      <Nav.Link  style={{ color: "white"}} eventKey={2} href="#mas-info">CONTACTO</Nav.Link>
    </Nav>   
  </Navbar.Collapse>
</Navbar>
        
    );
}

export default Navegacion;