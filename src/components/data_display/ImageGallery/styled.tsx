import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'
import * as T from '@styles/typography'

export const GalleryWrapper = styled.div`
  display: flex;
  margin: 3rem 0;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin: 1rem 0 0;
  `}
`
