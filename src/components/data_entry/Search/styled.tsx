import styled from 'styled-components'

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox {
    padding: 0.5rem 0;
  }

  .ais-Stats {
    padding-bottom: 1rem;
  }

  .ais-SearchBox {
    padding-top: 3rem;
  }

  .ais-Stats {
    color: #9e9e9e;
  }

  .ais-SearchBox-form {
    border-radius: 0;
  }

  .ais-SearchBox-input {
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
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
