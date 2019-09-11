import React from 'react';
import '../styles/portfolio.css';


const Home = () => {

    return (
        <div id='home'>
            <div id="home" className="d-flex flex-column justify-content-center align-content-center">
                <div className="row justify-content-center align-items-center">
                    <h1 id='home-title'>Michael<br />Reynard<br />Esser</h1>
                </div>
                <div className="row justify-content-center align-items-center">
                    <a id="home-arrow" href="#body" className="">
                        <i className="fas fa-chevron-down fa-5x"></i>
                    </a>
                </div>
            </div>
        </div> 
    )
}

export default Home;