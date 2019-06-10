import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/page-layout';
import Head from '../components/page-head';

const NotFound = () => {
    return (
        <Layout>
            <Head title='404' />
            <h1> Page not found</h1>
            <p><Link to='/'>Head back home</Link></p>
        </Layout>
    )
}

export default NotFound