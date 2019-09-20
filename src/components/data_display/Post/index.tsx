import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { trackEvent } from '@utils/analytics'
import Comments from '../Comments'
import * as S from './styled'

const Post = ({ post }: any) => {
  const date = new Date(post.frontmatter.date)
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const monthIndex = date.getMonth() + 1
  const month = monthIndex < 10 ? `0${monthIndex}` : monthIndex
  const year = date.getFullYear()
  const postGithubUrl = `https://github.com/LucasBassetti/lucasbassetti.com/blob/master/content/posts/${year}-${month}-${day}-${post.fields.slug.replace(
    '/',
    '.md'
  )}`

  const trackGithubPRClick = () => {
    trackEvent({
      category: 'Github PR',
      action: 'click',
      label: `Github PR - ${post.frontmatter.title}`,
    })
  }

  return (
    <article>
      <S.PostCoverImage fluid={post.frontmatter.image.childImageSharp.fluid} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min to read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <MDXRenderer>{post.body}</MDXRenderer>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <S.PostPullRequestWrapper>
          <h2>Something Missing?</h2>
          <p>
            This project is open-source, so if something is missing or if you
            found some part confusing, please submit a pull-request in the{' '}
            <a
              onClick={trackGithubPRClick}
              href={postGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
            repository for this post with your suggestions for improvement. It
            is a simple and effective way to contribute to the web development
            community.
          </p>
        </S.PostPullRequestWrapper>
      </S.MainContent>
      <Comments slug={post.fields.slug} title={post.frontmatter.title} />
    </article>
  )
}

export default Post
