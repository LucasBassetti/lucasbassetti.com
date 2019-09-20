import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectItem from '@components/data_display/ProjectItem'
import * as S from './styled'

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

const GithubRepositories = () => {
  const {
    githubData: {
      data: {
        user: { repositories },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
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

  const projects: IProject[] = repositories.edges
    .slice(0, 2)
    .map(({ node }: { node: INode }) => ({
      description: node.description,
      forkCount: node.forkCount,
      name: node.name,
      starsCount: node.stargazers.totalCount,
      url: node.url,
    }))

  return (
    <S.GithubRepositoriesWrapper>
      {projects.map(project => (
        <ProjectItem
          key={project.name}
          description={project.description}
          forkCount={project.forkCount}
          name={project.name}
          starsCount={project.starsCount}
          url={project.url}
        />
      ))}
    </S.GithubRepositoriesWrapper>
  )
}

export default GithubRepositories
