import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import SEO from '../components/layout/SEO'
import Projects from '../components/data_display/Projects'

interface INode {
  description: string
  forkCount: number
  name: string
  stargazers: {
    totalCount: number
  }
  url: string
}

interface IProject {
  description: string
  forkCount: number
  name: string
  starsCount: number
  url: string
}

const ProjectsPage = () => {
  const {
    githubData: {
      data: {
        user: { repositories },
      },
    },
  } = useStaticQuery(
    graphql`
      query Projects {
        githubData {
          data {
            user {
              repositories {
                edges {
                  node {
                    name
                    description
                    stargazers {
                      totalCount
                    }
                    url
                    forkCount
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const projects: IProject[] = repositories.edges.map(
    ({ node }: { node: INode }) => ({
      description: node.description,
      forkCount: node.forkCount,
      name: node.name,
      starsCount: node.stargazers.totalCount,
      url: node.url,
    })
  )

  return (
    <Layout>
      <SEO title="Projects" />
      <Projects projects={projects} />
    </Layout>
  )
}

export default ProjectsPage
