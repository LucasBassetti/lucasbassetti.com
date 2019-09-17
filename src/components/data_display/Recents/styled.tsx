import styled from 'styled-components'
import { Link } from 'gatsby'

export const RecentsWrapper = styled.section`
  padding-top: 3rem;
`

export const RecentsHeader = styled.div`
  align-items: flex-end;
  /* border-bottom: 1px solid var(--borders); */
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`

export const RecentsTitle = styled.h2`
  /* font-size: 2rem; */
  line-height: 1;
  margin: 0;
  padding: 0;
`

export const RecentsLink = styled(Link)`
  font-size: 1.2rem;
`
