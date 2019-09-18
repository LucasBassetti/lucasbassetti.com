import styled from 'styled-components'

import * as V from '@styles/variables'

export const SearchWrapper = styled.section`
  background: var(--bg);
  display: flex;
  flex-direction: column;
  transition: opacity 0.4s;
  width: 100%;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox {
    padding: ${V.Space.default} 0 0;
  }

  .ais-Stats {
    color: #9e9e9e;
    padding: ${V.Space.xxs} 0 ${V.Space.sm};
  }

  .ais-SearchBox-form {
    border-radius: 0;
  }

  .ais-SearchBox-input {
    appearance: none;
    background: none;
    border: 0;
    border-bottom: 1px solid var(--borderColor);
    border-radius: 0;
    color: var(--primaryColor);
    display: flex;
    font-size: 1.6rem;
    outline: none;
    padding: 0.5rem 0;
    width: 100%;

    &::placeholder {
      color: #9e9e9e;
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
