import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@components/layout/Layout'
import SEO from '@components/layout/SEO'
import ProfileIntro from '@components/data_display/ProfileIntro'
import PostItem from '@components/data_display/PostItem'
import ProjectItem from '@components/data_display/ProjectItem'
import PortfolioItem from '@components/data_display/PortfolioItem'
import Recents from '@components/data_display/Recents'

const IndexPage = () => {
  const { blogPosts, portfolioPosts, githubData } = useStaticQuery(
    graphql`
      query {
        blogPosts: allMdx(
          filter: { fields: { type: { eq: "blog" } } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 2
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
        portfolioPosts: allMdx(
          filter: { fields: { type: { eq: "portfolio" } } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 2
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                description
                date(locale: "en", formatString: "YYYY")
                title
                tags
                image {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
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

  const posts = blogPosts.edges
  const portfolio = portfolioPosts.edges
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
      <Recents
        title="Recent Work"
        url="/portfolio/"
        itemsComponent={portfolio.map(({ node }: any) => (
          <PortfolioItem
            key={node.fields.slug}
            tags={node.frontmatter.tags}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            image={node.frontmatter.image.childImageSharp.fluid}
            slug={node.fields.slug}
            title={node.frontmatter.title}
          />
        ))}
      />
    </Layout>
  )
}

export default IndexPage
