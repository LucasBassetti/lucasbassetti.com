import styled from 'styled-components'
import media from 'styled-media-query'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const ProjectItemWrapper = styled.a`
  display: inline-flex;
  flex-direction: column;
  height: 200px;
  margin: 0 0 ${V.Space.xs};
  width: calc(50% - ${V.Space.xxs});

  &:nth-child(odd) {
    margin-right: ${V.Space.xxs};
  }

  &:nth-child(even) {
    margin-left: ${V.Space.xxs};
  }

  &:hover {
    border-color: var(--primaryColor);
    color: var(--primaryColor);
  }

  ${media.lessThan('medium')`
    width: 100%;

    &:nth-child(odd) {
      margin-right: 0;
    }

    &:nth-child(even) {
      margin-left: 0;
    }
  `}
`

export const ProjectItemName = styled.h2`
  ${T.Heading4}
`

export const ProjectItemStatsWrapper = styled.div`
  display: flex;
  margin: ${V.Space.xxs} 0;
`

export const ProjectItemStatsItem = styled.div`
  align-items: center;
  border: 1px solid var(--borderColor);
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
`

export const ProjectItemStatsValue = styled.span`
  margin-left: 0.5rem;
`

export const ProjectItemDescription = styled.p`
  ${T.Subtitle3}
`
