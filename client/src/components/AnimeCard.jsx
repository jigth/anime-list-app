import React from 'react';

function AnimeCard(props) {
    return (
        <div className="card">
            {/* Card Header */}
            <div className="card-header">
                <h3>{props.anime.title}</h3>
            </div>
            {/* Card Body */}
            <div className="card-body">
                <p><strong>Title:</strong> {props.anime.title}</p>
                <p><strong>Status:</strong> {props.anime.status}</p>
                <div className="text-center">
                    <a href={props.anime.trailer_url}>
                        <img className="anime-presentation" src={props.anime.image_url} alt={ `Anime: ${props.anime.title}`} width="90%" />
                    </a>
                </div>
            </div>
            {/* Card Footer */}
            <div className="card-footer">
                <button 
                    className="btn btn-danger btn-block"
                    onClick={ () => props.deleteAnime( props.index ) }
                > Delete </button>
            </div>
        </div>
    )
}

export default AnimeCard;
