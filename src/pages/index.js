import React from 'react';
import Layout from '../components/page-layout'
import Head from '../components/page-head';
import Home from '../components/home';
import About from '../components/about';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Home />
            <About />
        </Layout>
    )
}

export default IndexPage;