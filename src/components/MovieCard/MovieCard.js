import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Favs from '../Favs/Favs';
import './MovieCard.css';

class MovieCard extends Component {
    constructor(props) {
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
        const title = this.props.title
        const image = this.props.image
        const description = this.props.description
        const movieId = this.props.movieId
        return (
            <div className='movie-card'>
                <Link to={`/pelicula/${movieId}`}>
                    <img src={`https://image.tmdb.org/t/p/w200${image}`} alt="img" />
                </Link>
                <h2 className='title-font'>{title}</h2>
                <span>
                    <p onClick={() => this.toggleShowMore()}>
                        {this.state.showMore ? "Ocultar descripción" : "Ver descripción"}
                    </p>
                    <Favs movie={{ id: movieId, title, poster_path: image }} />
                </span>
                {this.state.showMore && <p>{description}</p>}
            </div>
        )
    }
}

export default MovieCard;