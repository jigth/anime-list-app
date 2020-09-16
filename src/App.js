import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AnimeCardList from './components/AnimeCardList';
import CreationForm from './components/AnimeCreationForm';
import { animes } from './testdata/animes.json';


function App() {
  const [ animeCollection, setAnimeCollection] = useState(animes);

  function createAnime(newAnime) {
    setAnimeCollection([ ...animeCollection, newAnime]);
  }

  function deleteAnime(animeId) {
    const proceed = window.confirm("Está seguro de eliminar este anime?");

    if (proceed) {
      const updatedAnimes = animeCollection.filter( (anime, index) => {
        return animeId !== index;
      });

      setAnimeCollection(updatedAnimes);
    }
    
    
  }

  return (
    <div className="App">
      <Navbar listaAnimes = {animeCollection} />
      { /* Contenido Pagina */ }
      <h1 className="text-center mt-5">Lista de Animes</h1>
      
      <div className="row">
        <div className="container col-md-3 mt-5">
          <CreationForm createAnime={ createAnime } />
        </div>
        <div className="container col-md-8">
          <div className="row">
              <AnimeCardList 
                animeCollection={ animeCollection }
                deleteAnime={ deleteAnime } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
