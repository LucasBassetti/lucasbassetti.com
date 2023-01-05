import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { getActiveTheme } from '@utils/themes'
import Tags from '../Tags'
import Comments from '../Comments'
import * as S from './styled'

const PortfolioPost = ({ post }: any) => {
  const { image, date, title, description, url, tags } = post.frontmatter

  return (
    <article>
      <S.PortfolioPostCoverImage fluid={image.childImageSharp.fluid} />
      <S.PortfolioPostHeader>
        <S.PortfolioPostBack
          to="/portfolio/"
          bg={getActiveTheme()}
          cover={true}
          direction="down"
        >
          <S.PortfolioPostArrowBackIcon size={12} /> Back to list
        </S.PortfolioPostBack>
        <S.PortfolioPostDate>{date}</S.PortfolioPostDate>
        <S.PortfolioPostTitle>{title}</S.PortfolioPostTitle>
        <S.PortfolioPostDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {url && (
          <S.PortfolioPostUrl href={url} target="_blank">
            {url}
          </S.PortfolioPostUrl>
        )}
        <Tags tags={tags} />
      </S.PortfolioPostHeader>
      <S.MainContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </S.MainContent>
      <Comments slug={post.fields.slug} title={title} />
    </article>
  )
}

export default PortfolioPost
