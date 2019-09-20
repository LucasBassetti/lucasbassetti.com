import React from 'react'
import * as S from './styled'

interface IProps {
  tags: string[]
}

const Tags = ({ tags }: IProps) => (
  <S.Tags>
    <S.TagsIcon size={20} />
    {tags.join(', ')}
  </S.Tags>
)

export default Tags
