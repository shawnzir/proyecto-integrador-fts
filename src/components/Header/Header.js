import React from "react";
import MenuDeNav from "../MenuDeNav/MenuDeNav"
import "./Header.css"

function Header() {
    return (
        <header>
            <MenuDeNav home="Inicio" favoritos="Favoritos" vertodas="Ver todo"/>
        </header>
    )
}

export default Header;