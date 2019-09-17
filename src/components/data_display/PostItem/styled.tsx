import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const PostItemWrapper = styled(Link)`
  border-bottom: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  padding: 1rem 0;

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const PostItemCategory = styled.div`
  align-items: center;
  background: var(--texts);
  color: var(--background);
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
  font-size: 1rem;
  font-weight: 100;
  opacity: 0.8;
`

export const PostItemTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 100;
`
