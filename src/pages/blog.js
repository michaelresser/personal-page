import React from 'react';
import Layout from '../components/page-layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from '../styles/blog.module.scss';
import Head from '../components/page-head';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }   
    `)



    return (
        <div>
            <Layout>
                <Head title='Blog' />
                <h1>Blog Page</h1>
                <p>Follow along on my quest to become a professional developer</p>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage;