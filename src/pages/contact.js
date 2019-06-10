import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/page-layout';
import Head from '../components/page-head';

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <Head title='Contact'/>
            <h1> Contact </h1>
            <h2> Reach out with questions of comments about my work!</h2>
            <ul>
                <li><Link to='michaelresser@gmail.com'>Email</Link></li>
                <li><a href='https://www.linkedin.com/in/michaelresser/' target='blank'>LinkedIn</a></li>
                <li><a href='https://www.facebook.com/michaelressser' target='blank'>Facebook</a></li>
            </ul>
            </Layout>
        </div>
    )
}

export default ContactPage;