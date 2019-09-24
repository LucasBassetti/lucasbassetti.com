import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'

export const LayoutWrapper = styled.main.attrs({
  role: 'main',
})`
  margin: auto;
  max-width: 800px;
  min-height: 100vh;
  padding: ${V.Space.lg} ${V.Space.xs};
  transition: background-color ${V.Transition.default};
  will-change: background-color;

  ${media.lessThan('medium')`
    padding-top: ${V.Space.xlg};
  `}
`
