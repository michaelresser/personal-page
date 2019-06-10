import React from 'react'
import Layout from '../components/page-layout'
import Head from '../components/page-head'
import ProjectList from '../components/project-list'

const Projects = () => {
    return (
        <Layout>
            <Head title='Projects'/>     
            <ProjectList />
        </Layout>
    )
}

export default Projects;