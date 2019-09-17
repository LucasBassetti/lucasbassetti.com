import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import SEO from '../components/layout/SEO'
import ProfileIntro from '../components/data_display/ProfileIntro'
import PostItem from '../components/data_display/PostItem'
import ProjectItem from '../components/data_display/ProjectItem'
import Recents from '../components/data_display/Recents'

const IndexPage = () => {
  const { allMarkdownRemark, githubData } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 3) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(locale: "en", formatString: "LL")
                title
                description
                category
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

  const posts = allMarkdownRemark.edges
  const projects = githubData.data.user.repositories.edges
    .slice(0, 4)
    .map(({ node }: any) => node)

  console.log(posts)
  console.log(projects)

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
            category={node.frontmatter.category}
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
