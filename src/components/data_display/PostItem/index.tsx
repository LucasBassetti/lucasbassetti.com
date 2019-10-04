import React from 'react'
import { getActiveTheme } from '@utils/themes'
import { trackEvent } from '@utils/analytics'
import BoxHandler from '../BoxHandler'
import Tags from '../Tags'
import * as S from './styled'

interface IProps {
  date: string
  description?: string
  isMini?: boolean
  slug: string
  tags?: string[]
  timeToRead: number
  title: string
}

const PostItem = ({
  date,
  description,
  isMini,
  slug,
  tags,
  timeToRead,
  title,
}: IProps) => {
  const trackPostItemClick = () => {
    trackEvent({
      category: 'Blog',
      action: 'click',
      label: `Blog - ${title}`,
    })
  }

  return (
    <S.PostItemWrapper
      to={`/blog/${slug}`}
      bg={getActiveTheme()}
      onClick={trackPostItemClick}
      cover={true}
      direction="down"
    >
      <BoxHandler>
        <S.PostItemContent>
          <S.PostItemDate>{`${date} • ${timeToRead} min to read`}</S.PostItemDate>
          <S.PostItemTitle isMini={isMini}>{title}</S.PostItemTitle>
          {description && (
            <S.PostItemDescription>{description}</S.PostItemDescription>
          )}
          {tags && <Tags tags={tags} />}
        </S.PostItemContent>
      </BoxHandler>
    </S.PostItemWrapper>
  )
}

export default PostItem
