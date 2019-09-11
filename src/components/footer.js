import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata { 
                    author 
                }
            }
        }
    `)

    return (

        <footer id='footer' className='row'>
            <div className='col-lg text-center'>
                <p>Created by {data.site.siteMetadata.author}, ©2019</p>
            </div>
        </footer>
    )
}

export default Footer;