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
        <div>
            <div className={headerStyles.header}>
                <Link to="/"><h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1></Link>
            <ul className={headerStyles.navList}>
                <li className={headerStyles.navItem}><Link to='/projects'><h3>Project</h3></Link></li>
                <li className={headerStyles.navItem}><Link to='/about'><h3>About</h3></Link></li>
                <li className={headerStyles.navItem}><Link to='/blog'><h3>Blog</h3></Link></li>
                <li className={headerStyles.navItem}><Link to='/contact'><h3>Contact</h3></Link></li>
            </ul>
        </div>
        </div >
    )
}

export default Header;