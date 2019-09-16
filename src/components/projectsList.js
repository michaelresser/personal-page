import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
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
      /* <!--PROJECTS SECTION--> */ 
    <div id='projects' className='d-flex flex-column'>
        <div className='row justify-content-center'>
            <ul id='projects-menu' className='d-inline-flex'>
                <li id='' className='mx-3'>Websites</li>
                <li id='' className='mx-3'>FreeCodeCamp Projects</li>
                <li id='' className='mx-3'>Personal Projects</li>
            </ul>
        </div>
        {/* <!-- SKILLS ICONS --> */}
        <ul className='skills row justify-content-center mb-3'>
            <li className='skill-badge'><i className='fab fa-html5 fa-4x'></i></li>
            <li className='skill-badge'><i className='fab fa-css3-alt fa-4x'></i></li>
            <li className='skill-badge'><i className='fab fa-js fa-4x'></i></li>
            <li className='skill-badge'><i className='fab fa-react fa-4x'></i></li>
            <li className='skill-badge'><i className='fab fa-bootstrap fa-4x'></i></li>
            <li className='skill-badge'><i className='fab fa-git-square fa-4x'></i></li>
        </ul>
        {/* <!--  PROJECT GALLERY--> */}
        <div className='gallery row w-75 mx-auto'>
            <div className='project-wrap col-lg-4 p-0'>
                <div className='project-box'></div>
                <div className='project-text'>
                    <h1>Text</h1>
                    <p>Subtext</p>
                </div>
                <button>Button</button>
            </div>
            <div className='project-wrap col-lg-4 p-0'>
                <div className='project-box'></div>
                <div className='project-text'>
                    <h1>Text</h1>
                    <p>Subtext</p>
                </div>
                <button>Button</button>
            </div>
            <div className='project-wrap col-lg-4 p-0'>
                <div className='project-box'></div>
                <div className='project-text'>
                    <h1>Text</h1>
                    <p>Subtext</p>
                </div>
                <button>Button</button>
            </div>
            <div className='project-wrap col-lg-4 p-0'>
                <div className='project-box'></div>
                <div className='project-text'>
                    <h1>Text</h1>
                    <p>Subtext</p>
                </div>
                <button>Button</button>
            </div>
            <div className='project-wrap col-lg-4 p-0'>
                <div className='project-box'></div>
                <div className=' project-text'>
                    <h1>Text</h1>
                    <p>Subtext</p>
                </div>
                <button>Button</button>
            </div>
            <div className='project-wrap col-lg-4 p-0'>
                <div className='project-box'></div>
                <div className=' project-text'>
                    <h1>Text</h1>
                    <p>Subtext</p>
                </div>
                <button>Button</button>
            </div>
        </div>
    </div>


    // <div className={projectsListStyles.container}>
    //   {data.allContentfulProject.edges.map((edge) => {
    //     return (
    //       <div className={projectsListStyles.col}>
    //         <Link className={projectsListStyles.row} to={`projects/${edge.node.slug}`}>
    //           <div className={projectsListStyles.col}>
    //             <img src={edge.node.titleImage.file.url} alt={'project cover photo'} />                  <ul>
    //               {edge.node.stack.map((fact) => <li key={fact}>{fact}</li>)}
    //             </ul>
    //           </div>
    //           <div className={projectsListStyles.col}>
    //             <h1>{edge.node.title}</h1>
    //             <p>{edge.node.description}</p>


    //             <ul>
    //               <li><Link to={`projects/${edge.node.slug}`}> View Live Project</Link></li>
    //               <li><a href={edge.node.githubLink} target='blank'>GitHub Repo</a></li>
    //             </ul>

    //           </div>
    //         </Link>
    //       </div>
    //     )
    //   })}
    // </div>
  )
}

export default ProjectsList