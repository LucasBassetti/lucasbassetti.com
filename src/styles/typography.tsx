// ==================================================
// Typography
// ==================================================

import * as V from './variables'

export const Title = `
  color: var(--primaryColor);
  font-size: 3rem;  
  font-weight: 600;
  line-height: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`

export const Subtitle1 = `
  color: var(--secondaryColor);
  font-size: 1.5rem;
  letter-spacing: -0.45px;
  line-height: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`

export const Subtitle2 = `
  color: var(--secondaryColor);
  font-size: 1.3rem;
  letter-spacing: -0.04px;
  line-height: 1.7rem;
`

export const Subtitle3 = `
  color: var(--secondaryColor);
  font-size: 1.2rem;
  letter-spacing: -0.04px;
  line-height: 1.6rem;
`

export const Heading1 = `
  color: var(--primaryColor);
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.022em;
  line-height: 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.9rem;
  }
`

export const Heading2 = `
  color: var(--primaryColor);
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.04px;
  line-height: 2.2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.7rem;
  }
`

export const Heading3 = `
  color: var(--primaryColor);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.04px;
  line-height: 1.9rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
`

export const Heading4 = `
  color: var(--primaryColor);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.04px;
  line-height: 1.5rem;
`

export const Text1 = `
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.04px;
  line-height: 1.8rem;
`

export const Text2 = `
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: -0.14px;
  line-height: 1.7rem;
`

export const LinkTransition = `
  position: relative;
  will-change: transform;

  &:after {
    background-color: var(--highlightColor);
    content: '';
    height: 2px;
    left: 0;
    margin-top: ${V.Space.xxs};
    position: absolute;
    top: 100%;
    transform: scaleX(0);
    transition: transform ${V.Transition.default};
    width: 100%;
  }

  &:hover {
    &:after {
      transform: scaleX(1)
    }
  }
`

export const Link = `
  ${LinkTransition}

  color: var(--highlightColor);
`
