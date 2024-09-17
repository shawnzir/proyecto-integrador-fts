import React from "react";

function Menu(props) {
    return (
        <nav className="header-nav">
            <div className="logo">
                <img src="../img/fts-logo.png" alt="logo" className="logo-img"/>
            </div>
            <ul className="menu title-font">
                <li> <a href="/"> {props.home} </a> </li>
                <li> <a href="/favoritos"> {props.favoritos} </a> </li>
                <li> <a href="/peliculas"> {props.vertodas} </a> </li>
            </ul>
        </nav>
    )
};

export default Menu;