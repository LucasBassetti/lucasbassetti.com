import styled from 'styled-components'
import media from 'styled-media-query'

export const EducationItemWrapper = styled.a`
  align-items: center;
  border: 1px solid var(--borders);
  color: var(--texts);
  display: inline-flex;
  flex-direction: column;
  justify-content: 'center';
  /* height: 200px; */
  margin: 1rem 0 0;
  padding: 1rem;
  width: calc(50% - 0.5rem);

  &:nth-child(odd) {
    margin-right: 0.5rem;
  }

  &:nth-child(even) {
    margin-left: 0.5rem;
  }

  &:hover {
    border-color: var(--texts);
    color: var(--texts);
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

export const EducationItemUniversity = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`

export const EducationItemCourse = styled.h3`
  font-size: 1.2rem;
  font-weight: 100;
  margin: 0;
`

export const EducationItemDegree = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 0;
`

export const EducationItemDate = styled.time`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 400;
`

export const EducationItemThesis = styled.a``
