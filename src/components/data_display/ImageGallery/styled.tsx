import styled from 'styled-components'
// import media from 'styled-media-query'

import * as V from '@styles/variables'

export const GalleryWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`

export const GalleryImage = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
