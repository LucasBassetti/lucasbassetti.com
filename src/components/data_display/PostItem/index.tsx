import React from 'react'
import { getActiveTheme } from '@utils/themes'
import BoxHandler from '../BoxHandler'
import * as S from './styled'

interface IProps {
  date: string
  description: string
  slug: string
  tags: string[]
  timeToRead: number
  title: string
}

const PostItem = ({
  date,
  description,
  slug,
  tags,
  timeToRead,
  title,
}: IProps) => (
  <S.PostItemWrapper
    to={`/blog/${slug}`}
    bg={getActiveTheme()}
    cover={true}
    direction="down"
  >
    <BoxHandler>
      <S.PostItemContent>
        <S.PostItemDate>{`${date} • ${timeToRead} min to read`}</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <S.PostItemTags>
          <S.PostItemTagIcon size={20} />
          {tags.join(', ')}
        </S.PostItemTags>
      </S.PostItemContent>
    </BoxHandler>
  </S.PostItemWrapper>
)

export default PostItem