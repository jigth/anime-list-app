import React from 'react';

function Navbar(props) {
    return (
        <div>
            { /* Navbar principal */ }
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">Super Anime List!</a>
                    <div className="navbar w-100">
                        {/* Uncomment to add a list of links to the navbar */}
                        {/* <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            <a href="/" className="nav-link">item1</a> 
                            </li>
                            <li className="nav-item">
                            <a href="/" className="nav-link">item2</a> 
                            </li>
                            <li className="nav-item">
                            <a href="/" className="nav-link">item3</a> 
                            </li>
                        </ul> */}
                        <a href="/" className="text-light ml-auto">
                            Cantidad de animes 
                            <span className="badge badge-pill badge-warning ml-2">
                                { props.listaAnimes.length }         
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;