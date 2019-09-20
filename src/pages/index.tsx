import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@components/layout/Layout'
import SEO from '@components/layout/SEO'
import ProfileIntro from '@components/data_display/ProfileIntro'
import PostItem from '@components/data_display/PostItem'
import ProjectItem from '@components/data_display/ProjectItem'
import Recents from '@components/data_display/Recents'

const IndexPage = () => {
  const { allMdx, githubData } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fields: { type: { eq: "blog" } } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 3
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                description
                date(locale: "en", formatString: "LL")
                title
                tags
              }
              timeToRead
            }
          }
        }
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

  const posts = allMdx.edges
  const projects = githubData.data.user.repositories.edges
    .slice(0, 4)
    .map(({ node }: any) => node)

  return (
    <Layout>
      <SEO title="Home" />
      <ProfileIntro />
      <Recents
        title="Recent Articles"
        url="/blog/"
        itemsComponent={posts.map(({ node }: any) => (
          <PostItem
            key={node.fields.slug}
            tags={node.frontmatter.tags}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            slug={node.fields.slug}
            timeToRead={node.timeToRead}
            title={node.frontmatter.title}
          />
        ))}
      />
      <Recents
        title="Top Projects"
        url="/projects/"
        itemsComponent={projects.map((project: any) => (
          <ProjectItem
            key={project.name}
            description={project.description}
            forkCount={project.forkCount}
            name={project.name}
            starsCount={project.stargazers.totalCount}
            url={project.url}
          />
        ))}
      />
    </Layout>
  )
}

export default IndexPage
