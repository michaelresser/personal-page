import React from 'react';
import Footer from './page-footer';
import Header from './page-header';
import '../styles/index.scss'
import layoutStyles from '../styles/layout.module.scss';
import Head from './page-head';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;