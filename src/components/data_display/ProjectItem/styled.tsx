import styled from 'styled-components'
import media from 'styled-media-query'

export const ProjectItemWrapper = styled.a`
  border: 1px solid var(--borders);
  color: var(--texts);
  display: inline-flex;
  flex-direction: column;
  height: 200px;
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
      margin-right: 0;
    }

    &:nth-child(even) {
      margin-left: 0;
    }
  `}
`

export const ProjectItemName = styled.h2`
  font-size: 1.4rem;
  margin: 0;
`

export const ProjectItemStatsWrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`

export const ProjectItemStatsItem = styled.div`
  align-items: center;
  border: 1px solid var(--borders);
  display: flex;
  justify-content: space-between;
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
`

export const ProjectItemStatsValue = styled.span`
  margin-left: 0.5rem;
`

export const ProjectItemDescription = styled.p`
  font-size: 1.2rem;
  margin: 0;
`
