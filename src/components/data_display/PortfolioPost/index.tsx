import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getActiveTheme } from '@utils/themes'
import Tags from '../Tags'
import Comments from '../Comments'
import * as S from './styled'

const PortfolioPost = ({ post }: any) => {
  return (
    <article>
      <S.PortfolioPostCoverImage
        fluid={post.frontmatter.image.childImageSharp.fluid}
      />
      <S.PortfolioPostHeader>
        <S.PortfolioPostBack
          to="/portfolio/"
          bg={getActiveTheme()}
          cover={true}
          direction="down"
        >
          <S.PortfolioPostArrowBackIcon size={12} /> Back to list
        </S.PortfolioPostBack>
        <S.PortfolioPostDate>{post.frontmatter.date}</S.PortfolioPostDate>
        <S.PortfolioPostTitle>{post.frontmatter.title}</S.PortfolioPostTitle>
        <S.PortfolioPostDescription>
          {post.frontmatter.description}
        </S.PortfolioPostDescription>
        <Tags tags={post.frontmatter.tags} />
      </S.PortfolioPostHeader>
      <S.MainContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </S.MainContent>
      <Comments slug={post.fields.slug} title={post.frontmatter.title} />
    </article>
  )
}

export default PortfolioPost
