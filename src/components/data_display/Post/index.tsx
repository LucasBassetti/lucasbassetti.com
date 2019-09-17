import React from 'react'
import Comments from '../Comments'
import * as S from './styled'

const Post = ({ post }: any) => {
  return (
    <>
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min to read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <Comments slug={post.fields.slug} title={post.frontmatter.title} />
    </>
  )
}

export default Post
