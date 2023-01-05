import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '@components/layout/Layout'
import SEO from '@components/layout/SEO'
import Portfolio from '@components/data_display/Portfolio'

const PortfolioPage = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fields: { type: { eq: "portfolio" } } }
          sort: { fields: frontmatter___date, order: DESC }
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
      }
    `
  )

  const portfolio = allMdx.edges.map(({ node }: any) => ({
    ...node.fields,
    ...node.frontmatter,
    image: node.frontmatter.image
      ? node.frontmatter.image.childImageSharp.fluid
      : '',
  }))

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Portfolio portfolio={portfolio} />
    </Layout>
  )
}

export default PortfolioPage
