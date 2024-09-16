import React from "react";
import MenuDeNav from "../MenuDeNav/MenuDeNav"
import "./Header.css"

function Header() {
    return (
        <header>
            <MenuDeNav home="Home" favoritos="Favoritos" vertodas="Ver todas"/>
        </header>
    )
}

export default Header;