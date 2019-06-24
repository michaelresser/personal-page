import React from 'react'
import homeStyles from '../styles/home.module.scss'
import { graphql, useStaticQuery } from 'gatsby';
const Home = () => {

  const data = useStaticQuery(graphql`
    query {
        contentfulAsset(title:{eq:"test homepage photo"}){
          file{
            url
          }
        }
    }
    `)



  return (
    <div id='home' className={homeStyles.home}>
      <div className={homeStyles.text}>
        <h1>Michael Reynard Esser</h1>
        <p>Javascript Developer</p>
      </div>
    </div>
  )


}

export default Home