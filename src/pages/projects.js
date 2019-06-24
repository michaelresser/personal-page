import React from 'react'
import Layout from '../components/page-layout'
import Head from '../components/page-head'
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