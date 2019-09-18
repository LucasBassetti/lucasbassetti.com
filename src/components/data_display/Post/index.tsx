import React from 'react'
import Img from 'gatsby-image'
import Comments from '../Comments'
import * as S from './styled'

const Post = ({ post }: any) => {
  return (
    <>
      <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min to read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <S.PostPullRequestWrapper>
          <h2>Something Missing?</h2>
          <p>
            This project is open-source, so if something is missing in the
            documentation or if you found some part confusing, please submit a
            pull-request in the Github for the documentation repository with
            your suggestions for improvement. It is a simple and effective way
            to contribute to the web development community.
          </p>
        </S.PostPullRequestWrapper>
      </S.MainContent>
      <Comments slug={post.fields.slug} title={post.frontmatter.title} />
    </>
  )
}

export default Post
