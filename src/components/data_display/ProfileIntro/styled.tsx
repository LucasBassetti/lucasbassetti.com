import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'
import * as T from '@styles/typography'

export const ProfileIntroWrapper = styled.div`
  display: flex;
  margin: 3rem 0;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin: 1rem 0 0;
  `}
`

export const ProfileIntroPhoto = styled.div`
  margin: 0 0 0 1.5rem;
  max-width: 200px;
  min-width: 200px;
  position: relative;

  &::before {
    border: 3px solid var(--primaryColor);
    content: '';
    height: 200px;
    left: -1.5rem;
    position: absolute;
    top: 1.5rem;
    width: 200px;
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

  h1 {
    ${T.Title}
  }

  p {
    ${T.Text1}

    margin-top: ${V.Space.sm}
  }
`