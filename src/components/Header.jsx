import React from 'react'
import ImagenHeader from '.././imagenes/Header.jpg'

function Header() {
    return (

        <section className="header" style={{backgroundColor: "mintcream"}}>
            <div id="Container-img">
                <img style={{ border: "1px solid rgb(67, 67, 168)", opacity:"0.7" }} className="imagen-header w-100 h-50" id="img" src={ImagenHeader} alt="Foto Header" />
            </div>           
        </section>
    )
}

export default Header



