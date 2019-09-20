import styled from 'styled-components'
import media from 'styled-media-query'
import { Heart } from 'styled-icons/boxicons-solid/Heart'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const PortfolioTitle = styled.h1`
  ${T.Title}

  align-items: center;
  display: flex;
  justify-content: center;
  margin: ${V.Space.default} 0 ${V.Space.sm};
`

export const PortfolioDescription = styled.p`
  ${T.Subtitle1}

  margin-bottom: ${V.Space.default};
  text-align: center;
`

export const PortfolioHeartIcon = styled(Heart)`
  margin: 0 1rem;

  ${media.lessThan('medium')`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
  `}
`
