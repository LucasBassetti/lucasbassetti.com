import styled from 'styled-components'
import media from 'styled-media-query'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const EducationItemWrapper = styled.a`
  align-items: center;
  color: var(--primaryColor);
  display: inline-flex;
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
      margin-left: 0;
    }

    &:nth-child(even) {
      margin-right: 0;
    }
  `}
`

export const EducationItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const EducationItemUniversity = styled.h3`
  ${T.Subtitle4}
  font-weight: 400;
  margin: 0;
  text-align: center;
`

export const EducationItemCourse = styled.h3`
  ${T.Subtitle3}
  font-weight: 100;
  margin: 0;
`

export const EducationItemDegree = styled.h2`
  ${T.Heading1}
  margin: 1rem 0 0;
  text-align: center;
`

export const EducationItemDate = styled.time`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 1rem;
`
