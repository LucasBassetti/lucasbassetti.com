import React from 'react'
import { trackEvent } from '@utils/analytics'
import BoxHandler from '../BoxHandler'

import * as S from './styled'

interface IProps {
  authors: string
  conference: string
  title: string
  url: string
}

const PublicationItem = ({ authors, conference, title, url }: IProps) => {
  const trackPublicationItemClick = () => {
    trackEvent({
      category: 'Publication',
      action: 'click',
      label: `Publication - ${title}`,
    })
  }

  return (
    <S.PublicationItemWrapper
      onClick={trackPublicationItemClick}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <BoxHandler>
        <S.PublicationItemText>
          {authors} <strong>{title}</strong> {conference}
        </S.PublicationItemText>
      </BoxHandler>
    </S.PublicationItemWrapper>
  )
}

export default PublicationItem
