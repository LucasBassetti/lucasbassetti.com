import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import Layout from '@components/layout/Layout'
import SEO from '@components/layout/SEO'
import PortfolioPost from '@components/data_display/PortfolioPost'

interface IProps {
  data: {
    mdx: {
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        description: string
        image: {
          publicURL: string
          childImageSharp: FluidObject
        }
        tags: string[]
        title: string
        timeToRead: number
      }
      body: any
    }
  }
}

const PortfolioTemplate = ({ data }: IProps) => {
  const post = data.mdx

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
      />
      <PortfolioPost post={post} />
    </Layout>
  )
}

export const query = graphql`
  query PortolioItem($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "en", formatString: "YYYY")
        description
        tags
        title
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1280, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      body
    }
  }
`

export default PortfolioTemplate
