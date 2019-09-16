import React from 'react';
import '../styles/portfolio.css';


const Home = () => {

    return (
        <div id="home" className="d-flex flex-column justify-content-center align-content-center">
            <div className="row justify-content-center align-items-center">
                <h1 id='home-title'>MICHAEL<br />REYNARD<br />ESSER.</h1>
            </div>
            <div className="row justify-content-center align-items-center">
                <a id="home-arrow" href="#intro" className="">
                    <i className="fas fa-chevron-down fa-5x"></i>
                </a>
            </div>
        </div>

    )
}

export default Home;