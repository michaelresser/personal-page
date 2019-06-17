import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import projectListStyles from '../styles/project-list.module.scss'
import { Link } from 'gatsby'


const ProjectList = () => {

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

    <div>
      {data.allContentfulProject.edges.map((edge) => {
        return (
          <div className={projectListStyles.project}>
            <Link className={projectListStyles.image} className={'col-md-4 col-lg-6'} to={`projects/${edge.node.slug}`}>
              <img src={edge.node.titleImage.file.url} alt='project-image' />
            </Link>
            <div className={projectListStyles.info}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.description}</p>
              <ul>
                {edge.node.stack.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
              <ul className={'section'}>
                <li><Link to={`projects/${edge.node.slug}`}> View Live Project</Link></li>
                <li><a href={edge.node.githubLink} target='blank'>GitHub Repo</a></li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList