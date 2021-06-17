import React, { Component } from 'react';

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar';
import AnimeCardList from './components/AnimeCardList';
import CreationForm from './components/AnimeCreationForm';

// Database and API
import axios from 'axios';


class App extends Component {
    constructor() {
        super();
        this.state = {
            animeCollection: []
        }
    }

    async componentDidMount() {
        await this.initAnimeCollection();
    }

    async initAnimeCollection() {
        const animesEndpoint = process.env.REACT_APP_API_URL + '/animes';
        const { data } = await axios.get(animesEndpoint);
        this.updateAnimeCollection(data);
    }
    
    updateAnimeCollection = (newCollection) => {
        this.setState({ animeCollection: newCollection });
    }

    deleteAnime = async (animeId) => {
        const deleteEndpoint = `${process.env.REACT_APP_API_URL}/anime/delete/${animeId}`;

        const proceed = window.confirm("Are you sure you wan't to delete this anime?");

        if (proceed) {
            const updatedAnimes = this.state.animeCollection.filter( (anime) => {
                return animeId !== anime._id;
            });

            await axios.delete(deleteEndpoint);
            this.updateAnimeCollection(updatedAnimes);
        }
    }

    render() {
        return (
            <div className="App">
              <Navbar animeList={ this.state.animeCollection } />

              <h1 
                  className="text-center mt-5 font-weight-bold" 
                  style={{ textShadow: '1px 1px 5px white' }}
              >
                  Anime list App
              </h1>

              <div className="row">
                <div className="container col-md-3 mt-5">
                    <CreationForm updateAnimeCollection={ this.updateAnimeCollection } />
                </div>
                <div className="container col-md-8">
                  <div className="row">
                      <AnimeCardList 
                        animeCollection={ this.state.animeCollection }
                        deleteAnime={ this.deleteAnime } />
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default App;
