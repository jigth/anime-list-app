import React from 'react';


function AnimeCardList(props) {
    
    return props.animeCollection.map((anime, index) => {
        return (
            <div className="col-md-4 col-sm-6 mt-5" key={index}>
                <div className="card">
                    {/* Card Header */}
                    <div className="card-header">
                        <h3>{anime.title}</h3>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <p><strong>Titulo (en ingles):</strong> {anime.title}</p>
                        <p><strong>Estado:</strong> {anime.status}</p>
                        <div className="text-center">
                            <a href={anime.trailer_url}>
                                <img className="anime-presentation" src={anime.image_url} alt={ `Imagen del anime ${anime.title}`} width="90%" />
                            </a>
                        </div>
                    </div>
                    {/* Card Footer */}
                    <div className="card-footer">
                        <button 
                            className="btn btn-danger btn-block"
                            onClick={() => props.deleteAnime(index)}
                        >Eliminar</button>
                    </div>
                </div>
            </div>
        );
    });
}

export default AnimeCardList;