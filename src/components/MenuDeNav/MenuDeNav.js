import React from "react";

function Menu(props) {
    return (
        <nav>
            <ul className="menu">
                <li> <a href="/"> {props.home} </a> </li>
                <li> <a href="/favoritos"> {props.favoritos} </a> </li>
                <li> <a href="/peliculas"> {props.vertodas} </a> </li>
            </ul>
            <ul className="logo">
                <img src="" alt="logo" className="logo-img"/>
            </ul>
        </nav>
    )
};

export default Menu;