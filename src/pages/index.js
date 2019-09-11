import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Home from '../components/home';

const IndexPage = () => {
    return (
        <div>
            <Home />
            <Layout>
                <Intro />
            </Layout>
        </div>
    )
}

export default IndexPage;