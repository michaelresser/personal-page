import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import projectsListStyles from '../styles/projectsList.module.scss'
import { Link } from 'gatsby'


const ProjectsList = () => {

  const data = useStaticQuery(graphql`
  query{
    allContentfulProject{
      edges{
        node{
          title
          titleImage{
            file{
              url
            }
          }
          slug
          description
          stack
          githubLink
        }
      }
    }
  }
  `)

  return (

    <div className={projectsListStyles.container}>
      {data.allContentfulProject.edges.map((edge) => {
        return (
          <div className={projectsListStyles.col}>
            <Link className={projectsListStyles.row} to={`projects/${edge.node.slug}`}>
              <div className={projectsListStyles.col}>
                <img src={edge.node.titleImage.file.url} alt={'project cover photo'} />                  <ul>
                  {edge.node.stack.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>
              </div>
              <div className={projectsListStyles.col}>
                <h1>{edge.node.title}</h1>
                <p>{edge.node.description}</p>


                <ul>
                  <li><Link to={`projects/${edge.node.slug}`}> View Live Project</Link></li>
                  <li><a href={edge.node.githubLink} target='blank'>GitHub Repo</a></li>
                </ul>

              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectsList