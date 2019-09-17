import styled from 'styled-components'
import media from 'styled-media-query'

export const ProfileIntroWrapper = styled.div`
  display: flex;
  margin: 3rem 0;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin: 1rem 0 0;
  `}
`

export const ProfileIntroPhoto = styled.div`
  max-width: 200px;
  min-width: 200px;
  position: relative;
  margin: 0 0 0 1.5rem;

  &::before {
    border: 3px solid var(--texts);
    content: '';
    width: 200px;
    height: 200px;
    position: absolute;
    left: -1.5rem;
    top: 1.5rem;
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const ProfileIntroText = styled.div`
  margin: 0 0 0 1.5rem;

  ${media.lessThan('medium')`
    margin: 2rem 0 0;
  `}
`
