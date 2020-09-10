import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Portafolio from './Portafolio'
import Footer from './Footer'

let PaginaCompleta = () => {
    return (
        <div>
            <Navbar />   
            <Header /> 
            <Portafolio /> 
            <Footer />                 
        </div>
    )
}

export default PaginaCompleta;
