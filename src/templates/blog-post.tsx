import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import SEO from '../components/layout/SEO'
import Post from '../components/data_display/Post'

interface IProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string
        description: string
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
      frontmatter {
        date(locale: "en", formatString: "LL")
        description
        title
      }
      timeToRead
      html
    }
  }
`

export default BlogPost
