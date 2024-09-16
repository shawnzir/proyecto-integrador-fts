import { Component } from "react";

class Menu extends Component {

    render() {
        return (
            <nav className="header-nav">

                <div className="logo">
                    <img src="./img/fts-logo.png" alt="logo" className="logo-img" />
                </div>

                <ul className="menu">
                    <li> <a href="/"> {this.props.home} </a> </li>
                    <li> <a href="/favoritos"> {this.props.favoritos} </a> </li>
                    <li> <a href="/peliculas"> {this.props.vertodas} </a> </li>
                </ul>

            </nav>
        )
    }
};

export default Menu;