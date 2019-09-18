import React from 'react'
import { getActiveTheme } from '@utils/themes'

import * as S from './styled'

interface IProps {
  itemsComponent: React.ReactNode
  title: string
  url: string
}

const Recents = ({ itemsComponent, title, url }: IProps) => (
  <S.RecentsWrapper>
    <S.RecentsHeader>
      <S.RecentsTitle>{title}</S.RecentsTitle>
      <S.RecentsLink
        to={url}
        bg={getActiveTheme()}
        cover={true}
        direction="down"
      >
        Show all
      </S.RecentsLink>
    </S.RecentsHeader>
    <div>{itemsComponent}</div>
  </S.RecentsWrapper>
)

export default Recents
