import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/intro';
import Home from '../components/home';
import ProjectsList from '../components/projectsList'

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <Home />
                <Intro />
                <ProjectsList/>
                
                
            </Layout>
        </div>
    )
}

export default IndexPage;