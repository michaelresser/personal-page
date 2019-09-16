import React from "react"
import '../styles/portfolio.css';

const Header = () => {

  return (
    <div id="main-nav" className="row sticky-top">
      <a id="logo" href='#home'>
        <i class="fas fa-mountain fa-1x"></i>
      </a>
      <div id="nav-items" className="d-flex flex-row justify-content-start">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#articles">Articles</a>
        <a href="#contact">Contact</a>
      </div>
      <a id='main-nav-toggle' className='toggle'>
        <i className="fas fa-bars fa-1x"></i>
      </a>
    </div>
  )
}

export default Header;
