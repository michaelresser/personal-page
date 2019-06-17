import React from 'react';
import Footer from './page-footer';
import Header from './page-header';
import layoutStyles from '../styles/layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div >

    )
}

export default Layout;