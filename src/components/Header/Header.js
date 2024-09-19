import React from "react";
import MenuDeNav from "../MenuDeNav/MenuDeNav"
import "./Header.css"

function Header() {
    return (
        <header>
            <MenuDeNav home="Inicio" favoritos="Favoritos" populares="Populares" cartelera="Cartelera"/>
        </header>
    )
}

export default Header;