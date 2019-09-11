import React from 'react';
import '../styles/portfolio.css';

const Intro = () => {

    return (
        <div id='intro' className='container-fluid'>
            <div className='row justify-content-center'>
                {/* left column */}
                <div id='intro-left' className='col-lg-4 col-md-6 col-sm-10 col-12 justify-content-center align-content-end'>
                    <div id='intro-image' class=''></div>
                </div>
                {/* right column */}
                <div id='intro-right' className='col-lg-4 col-md-6 col-sm-10 col-12 align-content-start'>
                    <div id='intro-text' className=''>
                        <h1>Hi. I am Mike.</h1>
                        <p>Thanks for stopping by to explore my space. Here, You will find examples of my work in Web Development, Health Promotion, and Martial Arts Instruction. </p>
                        <div className='quote-box'>
                            <i className='fas fa-quote-left'></i><h3>In Challenge, one will find Change.</h3>
                            <span>-MRE</span>
                        </div>
                        <p>It is my hope that through following along with the incarnation of my imaginations, you can ignite your inspiration, gather new knowledge, or maybe catch a little of both. Please feel free to reach out with comments or requests. -MRE.</p>
                        <div className='justify-content-center'>
                            <button id='about-link' >Lets do something cool!</button>
                            <button id='projects-link' >Lets do something cool!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;