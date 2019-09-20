import styled from 'styled-components'
import { Tag } from 'styled-icons/boxicons-solid/Tag'
import * as V from '@styles/variables'

export const Tags = styled.p`
  color: var(--secondaryColor);
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  margin-top: ${V.Space.default};
`

export const TagsIcon = styled(Tag)`
  margin-right: ${V.Space.xs};
`
