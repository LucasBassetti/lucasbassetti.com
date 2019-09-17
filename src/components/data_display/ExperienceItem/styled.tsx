import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const ExperienceItemWrapper = styled.div`
  border-bottom: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  padding: 1rem 0;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const ExperienceItemImage = styled(Img)`
  border: 1px solid var(--borders);

  ${media.lessThan('medium')`
    display: none !important;
  `};
`

export const ExperienceItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
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
`

export const ExperienceItemPosition = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`

export const ExperienceItemDate = styled.time`
  font-size: 1rem;
  font-weight: 100;
  opacity: 0.8;
`

export const ExperienceCompany = styled.a`
  color: var(--texts);
  font-size: 1.2rem;
  font-weight: 200;
`

export const ExperienceItemTech = styled.p`
  margin: 1rem 0 0;
`

export const ExperienceItemTechItem = styled.span`
  background: var(--highlight);
  color: var(--background);
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.5rem;
`
