import React from 'react';
import Layout from '../components/page-layout';
import Head from '../components/page-head';


const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title='About'/>
                <h1> About </h1>
                <h2> Bio </h2>
                <p>
                    Mike is a entry level web developer currently focused on mastering Javascript and associated frameworks such as; React, Gatsby.js, and Redux. He lives in Kennesaw, GA with his amazing wife and 1 year old daughter.
                </p>
            </Layout>
        </div>
    )
}

export default AboutPage;