import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as heartFull } from '@fortawesome/free-solid-svg-icons'; 

class Favs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: null
        };
    }

    componentDidMount() {
        const item = JSON.parse(localStorage.getItem("favoritos"));
        if (item) {
            const isFav = item.find(elem => elem.id === this.props.movie.id);
            this.setState({
                favs: !!isFav
            });
        }
    }

    handleClick = () => {
        let movie = this.props.movie;
        let obj = {
            id: movie.id,
            image: `https://image.tmdb.org/t/p/original${movie.poster_path}`
        };

        let item = JSON.parse(localStorage.getItem("favoritos"));

        if (this.state.favs) {
            // Eliminar de favoritos
            let filtered = item.filter(elem => elem.id !== movie.id);
            localStorage.setItem("favoritos", JSON.stringify(filtered));
            this.setState({
                favs: false
            });
        } else {
            // Agregar a favoritos
            if (localStorage.getItem("favoritos")) {
                let array = JSON.parse(localStorage.getItem("favoritos"));
                array.push(obj);
                localStorage.setItem("favoritos", JSON.stringify(array));
            } else {
                localStorage.setItem("favoritos", JSON.stringify([obj]));
            }
            this.setState({
                favs: true
            });
        }
    };

    render() {
        return (
            <button className='fav-btn' onClick={this.handleClick}>
                {this.state.favs ? 
                    <FontAwesomeIcon icon={heartFull} style={{ color: "#550dcf" }} />
                    : 
                    <FontAwesomeIcon icon={heartEmpty} style={{ color: "#550dcf" }} />
                }
            </button>
        );
    }
}

export default Favs;
