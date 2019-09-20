import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import { Stack } from 'styled-icons/icomoon/Stack'

import * as T from '@styles/typography'
import * as V from '@styles/variables'

export const ExperienceItem = styled.a`
  display: block;

  &:not(:last-child) {
    margin-bottom: ${V.Space.xs};
  }

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const ExperienceItemWrapper = styled.div`
  display: flex;
`

export const ExperienceItemImage = styled(Img)`
  border: 1px solid var(--borderColor);

  ${media.lessThan('medium')`
    display: none !important;
  `}
`

export const ExperienceItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${V.Space.sm};
  width: 100%;

  ${media.lessThan('medium')`
    margin-left: 0;
  `}
`

export const ExperienceItemContentHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media.lessThan('medium')`
    align-items: flex-start;
    flex-direction: column;
  `}
`

export const ExperienceItemPosition = styled.h2`
  ${T.Heading2}

  ${media.lessThan('medium')`
    order: 2
  `}
`

export const ExperienceItemDate = styled.time`
  color: var(--secondaryColor);
  font-size: 1rem;
  font-weight: 100;

  ${media.lessThan('medium')`
    font-size: 0.8rem;
    margin-bottom: ${V.Space.xs}
    order: 1
  `}
`

export const ExperienceCompany = styled.span`
  color: var(--secondaryColor);
  font-size: 1.2rem;
  margin-top: 0.2rem;
`

export const ExperienceItemTech = styled.p`
  align-items: center;
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: ${V.Space.sm};

  ${media.lessThan('medium')`
    margin-top: ${V.Space.sm};
  `}
`

export const ExperienceItemStackIcon = styled(Stack)`
  margin-right: ${V.Space.xs};
`
