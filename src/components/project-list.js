import React from 'react';
import projectListStyles from '../styles/project-list.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';



const ProjectList = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulProject{
          edges{
            node{
              coverPhoto{
                file{
                  url
                }
                fixed{
                    width
                }
              }
              projectTitle
              quickDescription
              quickFacts
            }
          }
        }
    }
    `)




    return (
        <div>
            {data.allContentfulProject.edges.map((edge) => {
                return (
                    <div className={projectListStyles.container}>
                        <img src={edge.node.coverPhoto.file.url} fixed={edge.node.coverPhoto.fixed} />
                        <div className={projectListStyles.info}>
                            <h2>{edge.node.projectTitle}</h2>
                            <h4>{edge.node.quickDescription}</h4>
                            <ul className={projectListStyles.list}>
                                {edge.node.quickFacts.map((fact) => <li key={fact}>{fact}</li>)}
                            </ul>
                            <a>GitHub</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList