import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import ProjectsList from '../components/projectsList'

const Projects = () => {
    return (
        <Layout>
            <Head title='Projects'/>     
            
            
            <ProjectsList />
        </Layout>
    )
}

export default Projects;