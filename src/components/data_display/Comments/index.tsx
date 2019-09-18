import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

interface IProps {
  slug: string
  title: string
}

const Comments = ({ slug, title }: IProps) => {
  const completeURL = `https://lucasbassetti.com/blog/${slug}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <ReactDisqusComments
        shortname="lucasbassetti"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

export default Comments
