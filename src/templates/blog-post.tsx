import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import Layout from '@components/layout/Layout'
import SEO from '@components/layout/SEO'
import Post from '@components/data_display/Post'

interface IProps {
  data: {
    markdownRemark: {
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        description: string
        image: FluidObject
        title: string
        timeToRead: number
      }
      html: string
    }
  }
}

const BlogPost = ({ data }: IProps) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <Post post={post} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "en", formatString: "LL")
        description
        title
        image {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 1280, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      html
    }
  }
`

export default BlogPost
