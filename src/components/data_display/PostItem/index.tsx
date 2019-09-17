import React from 'react'
import * as S from './styled'

interface IProps {
  category: 'TS' | 'JS' | 'CSS' | 'MISC'
  date: string
  description: string
  slug: string
  timeToRead: number
  title: string
}

const PostItem = ({
  category,
  date,
  description,
  slug,
  timeToRead,
  title,
}: IProps) => (
  <S.PostItemWrapper to={`/blog/${slug}`}>
    <S.PostItemCategory>{category}</S.PostItemCategory>
    <S.PostItemContent>
      <S.PostItemDate>{`${date} • ${timeToRead} min to read`}</S.PostItemDate>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemContent>
  </S.PostItemWrapper>
)

export default PostItem
