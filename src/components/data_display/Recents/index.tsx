import React from 'react'
import { getActiveTheme } from '@utils/themes'
import { trackEvent } from '@utils/analytics'

import * as S from './styled'

interface IProps {
  itemsComponent: React.ReactNode
  title: string
  url: string
}

const Recents = ({ itemsComponent, title, url }: IProps) => {
  const trackRecentClick = () => {
    trackEvent({
      category: 'Recent',
      action: 'click',
      label: `Recent - Show all ${title}`,
    })
  }

  return (
    <S.RecentsWrapper>
      <S.RecentsHeader>
        <S.RecentsTitle>{title}</S.RecentsTitle>
        <S.RecentsLink
          to={url}
          bg={getActiveTheme()}
          onClick={trackRecentClick}
          cover={true}
          direction="down"
        >
          Show all
        </S.RecentsLink>
      </S.RecentsHeader>
      <div>{itemsComponent}</div>
    </S.RecentsWrapper>
  )
}

export default Recents
