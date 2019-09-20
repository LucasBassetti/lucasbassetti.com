import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from '@styles/variables'

export const GalleryWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`

export const GalleryImageWrapper = styled.div`
  display: inline-flex;
`

export const GalleryImage = styled.img`
  cursor: pointer;
  height: auto;
  margin-right: ${V.Space.xs};
  max-height: 300px;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }

  ${media.lessThan('medium')`
    height: auto;
    max-height: 200px;
    width: 100%;
  `}
`
