import React from 'react';
import Head from '../components/head';
import Footer from './footer';
import Header from './header';

const Layout = (props) => {
    return (
        <div>
            <Head />
            <Header />
            <div id='body'>
                {props.children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout;