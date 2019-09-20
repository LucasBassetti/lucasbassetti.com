import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import Layout from '@components/layout/Layout'
import SEO from '@components/layout/SEO'
import Post from '@components/data_display/Post'

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

const BlogPost = ({ data }: IProps) => {
  const post = data.mdx

  console.log(post)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
      />
      <Post post={post} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "en", formatString: "LL")
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

export default BlogPost
