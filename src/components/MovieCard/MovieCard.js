import React, {Component} from "react";

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
        }else {
            this.setState({
                showMore: false
            })
        }
    }

    render() {
        return (
            <article className="movie-container" >
                <img src={""} alt="" />
                <h2>{"Nombre o titulo"}</h2>
                <p onClick={ () => this.toggleShowMore() }>
                    {this.state.showMore ? "Ocultar descripción" : "Ver descripción"}
                </p>
                {this.state.showMore && <p>{"La descripción"}</p>}
                <a href={`/pelicula/$:id`}>Ir al detalle</a>

            </article>
        )
    }
}

export default MovieCard;