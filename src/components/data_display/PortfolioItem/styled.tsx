import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const PortfolioItemWrapper = styled(AniLink)`
  display: block;
  margin-bottom: ${V.Space.xs};
`

export const PortfolioItemContent = styled.div`
  display: flex;
`

export const PortfolioItemImg = styled(Img)`
  height: 180px;
  margin-right: ${V.Space.sm};
  min-width: 180px;
  width: 180px;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const PortfolioItemText = styled.div`
  display: flex;
  flex-direction: column;
`

export const PortfolioItemDate = styled.time`
  color: var(--secondaryColor);
  display: block;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;

  &:not(:last-child) {
    margin-bottom: ${V.Space.xxs};
  }
`

export const PortfolioItemTitle = styled.h2`
  ${T.Heading1}

  margin: ${V.Space.xxs} 0 ${V.Space.xxs};
`

export const PortfolioItemDescription = styled.p`
  ${T.Subtitle4}
`
