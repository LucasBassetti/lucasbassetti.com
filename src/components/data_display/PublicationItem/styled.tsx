import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'

export const PublicationItemWrapper = styled.a`
  display: block;

  &:not(:last-child) {
    margin-bottom: ${V.Space.xs};
  }

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const PublicationItemText = styled.p`
  color: var(--secondaryColor);
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.02rem;
  line-height: 1.7rem;

  strong {
    color: var(--primaryColor);
  }

  ${media.lessThan('medium')`
    font-size: 1.1rem;
    line-height: 1.6rem;
  `}
`
