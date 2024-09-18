import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as heartFull } from '@fortawesome/free-solid-svg-icons';
// import { faPlay as play } from '@fortawesome/free-solid-svg-icons';
// import { faImdb as IMDB } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Favs from '../Favs/Favs';


class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMore: false
        }
    }
    toggleShowMore = () => {
        if (this.state.showMore === false) {
            this.setState({
                showMore: true
            })
        } else {
            this.setState({
                showMore: false
            })
        }
    }

    render() {
        const {title, image, description, movieId } = this.props
        return (
            <div className="wrapper" >
                <div className='movie-card'>
                <Link to={`/pelicula/${movieId}`}>
                <img src={`https://image.tmdb.org/t/p/original${image}`} alt="img" />
                </Link>
                </div>
                <h2>{title}</h2>
                <p onClick={() => this.toggleShowMore()}>
                    {this.state.showMore ? "Ocultar descripción" : "Ver descripción"}
                </p>
                {this.state.showMore && <p>{description}</p>}
                <Favs movie={{ id: movieId, title, poster_path: image }} />
                <a href="/ver-todas-populares">Ver todas</a>
            </div>
        )
    }
}

export default MovieCard;