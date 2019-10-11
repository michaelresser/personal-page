import React from "react"
import '../styles/portfolio.css';

const Header = () => {
  

  return (
    <navbar id="main-nav" className="row">
      <a id="logo" className='nav-item' href='#home'>
        <i class="fas fa-mountain"></i>
      </a>
      <div id="main-nav-items" className="row justify-content-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#articles">Articles</a>
        <a href="#contact">Contact</a>
      </div>
      <a id='main-nav-toggle' className='nav-item float-right'>
        <i className="fas fa-bars"></i>
      </a>
    </navbar>
  )
}

export default Header;
