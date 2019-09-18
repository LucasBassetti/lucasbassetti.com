import styled, { keyframes } from 'styled-components'

const sun = keyframes`
  from {
    transform: translate(-50%,-50%) rotate(0deg);
  }
  to{
    transform: translate(-50%,-50%) rotate(360deg);
  }
`

export const ThemeSwitchWrapper = styled.span`
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border: 0;
  border-radius: 0.5rem;
  display: inline-flex;
  height: 1rem;
  margin: 0 1rem;
  padding: 0;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.3s cubic-bezier(0.64, 0, 0.25, 1);
  width: 3.5rem;
  /* position: fixed;
  bottom: 1rem;
  right: 1rem; */

  &.light {
    background: rgba(0, 0, 0, 0.15);
  }

  > input {
    appearance: none;
    background: red;
    bottom: 0;
    cursor: pointer;
    display: block;
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(-25%);
    transform-style: preserve-3d;
    width: 100%;
    z-index: 1;

    + label {
      border-radius: 1rem;
      color: rgba(255, 255, 255, 0.25);
      display: inline-block;
      height: 2rem;
      position: relative;
      transition: all 0.3s cubic-bezier(0.64, 0, 0.25, 1);
      width: 2rem;

      &::before {
        background: 50% 50%/50% 50%
          radial-gradient(#ffe175, transparent 55%, transparent);
        content: '';
        height: 100%;
        left: 50%;
        mask-image: repeating-conic-gradient(
          transparent 0 32deg,
          black 0 36deg
        );
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
        transform-style: preserve-3d;
        transition: all 0.3s cubic-bezier(0.64, 0, 0.25, 1);
        width: 100%;
      }

      &::after {
        background: 5% 15%/40% 40%
            radial-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.15) 50%,
              transparent 55%,
              transparent 100%
            )
            no-repeat,
          80% 45%/20% 20%
            radial-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.15) 50%,
              transparent 55%,
              transparent 100%
            )
            no-repeat,
          110% 190%/70% 70%
            radial-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.15) 50%,
              transparent 55%,
              transparent 100%
            )
            no-repeat;
        background-color: white;
        border-radius: 100%;
        bottom: 0;
        box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.75),
          0 0 0.5rem rgba(255, 255, 255, 0.25);
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform-style: preserve-3d;
        transition: background 0.5s cubic-bezier(0.64, 0, 0.25, 1),
          box-shadow 0.3s cubic-bezier(0.64, 0, 0.25, 1);
      }
    }

    &:checked + label {
      color: #ffe175;
      transform: translateX(75%);

      &:before {
        background: 50% 50%/100% 100%
          radial-gradient(#ffe175, transparent 55%, transparent);
        opacity: 0.5;
        transform: translate(-50%, -50%) rotate(60deg);
      }

      &:after {
        background: 205% 15%/40% 40%
            radial-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.15) 50%,
              transparent 55%,
              transparent 100%
            )
            no-repeat,
          280% 45%/20% 20%
            radial-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.15) 50%,
              transparent 55%,
              transparent 100%
            )
            no-repeat,
          310% 190%/70% 70%
            radial-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.15) 50%,
              transparent 55%,
              transparent 100%
            )
            no-repeat;
        background-color: white;
        box-shadow: inset 0 0 1rem 0.5rem #ffe175, 0 0 2rem #ffe175;
        transition: background 0.5s cubic-bezier(0.64, 0, 0.25, 1),
          box-shadow 1s cubic-bezier(0.64, 0, 0.25, 1);
      }
    }

    &:hover:checked + label:before {
      animation: ${sun} 10s linear infinite;
    }
  }
`
