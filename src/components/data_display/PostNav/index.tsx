import React from 'react'
import PostItem from '../PostItem'

import * as S from './styled'

interface INavPost {
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
  }
  timeToRead: number
}

interface IProps {
  next: INavPost
  previous: INavPost
}

const PostNav = ({ next, previous }: IProps) => {
  return (
    <S.PostNav>
      {previous && (
        <S.NavItem>
          <PostItem
            slug={previous.fields.slug}
            date={previous.frontmatter.date}
            title={previous.frontmatter.title}
            timeToRead={previous.timeToRead}
            isMini={true}
          />
        </S.NavItem>
      )}
      {next && (
        <S.NavItem>
          <PostItem
            slug={next.fields.slug}
            date={next.frontmatter.date}
            title={next.frontmatter.title}
            timeToRead={next.timeToRead}
            isMini={true}
          />
        </S.NavItem>
      )}
    </S.PostNav>
  )
}

export default PostNav
