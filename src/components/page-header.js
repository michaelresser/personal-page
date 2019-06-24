import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from '../styles/header.module.scss'


const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={headerStyles.header}>
            <Link to="/"><h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1></Link>
            <ul className={headerStyles.navList}>
                <li className={headerStyles.navItem}><Link to='/projects'>Projects</Link></li>
                <li className={headerStyles.navItem}><Link to='/blog'>Articles</Link></li>
                <li className={headerStyles.navItem}><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>

    )
}

export default Header;