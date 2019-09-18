import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Tag } from 'styled-icons/boxicons-solid/Tag'
import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const PostItemWrapper = styled(AniLink)`
  display: block;

  &:not(:last-child) {
    margin-bottom: ${V.Space.xs};
  }
`

export const PostItemCategory = styled.div`
  align-items: center;
  background: var(--primaryColor);
  color: var(--bg);
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  height: 64px;
  justify-content: center;
  margin: 0 1rem 1rem 0;
  min-width: 64px;
  width: 64px;

  ${media.lessThan('medium')`
    height: 30px;
  `}
`

export const PostItemContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostItemDate = styled.time`
  color: var(--secondaryColor);
  display: block;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;

  &:not(:last-child) {
    margin-bottom: ${V.Space.xxs};
  }
`

export const PostItemTitle = styled.h2`
  ${T.Heading1}

  margin: ${V.Space.xxs} 0 ${V.Space.xs};
`

export const PostItemDescription = styled.p`
  ${T.Subtitle2}
`

export const PostItemTags = styled.p`
  font-size: 0.9rem;
  margin-top: ${V.Space.default};
`

export const PostItemTagIcon = styled(Tag)`
  margin-right: ${V.Space.xs};
`
