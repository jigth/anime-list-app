import React from 'react';
import AnimeCard from './AnimeCard'

function AnimeCardList(props) {
    
    return props.animeCollection.map((anime, index) => {
        return (
            <div className="col-md-4 col-sm-6 mt-5" key={index}>
                <AnimeCard 
                    anime={ anime }
                    deleteAnime={ props.deleteAnime }
                    index={ anime._id }
                />
            </div>
        );
    });
}

export default AnimeCardList;
