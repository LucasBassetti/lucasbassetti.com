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
  width: 3.5rem;
  height: 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.64, 0, 0.25, 1);
  transform-style: preserve-3d;
  border: 0;
  margin: 0 1rem;
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0;
  /* position: fixed;
  bottom: 1rem;
  right: 1rem; */

  &.light {
    background: rgba(0, 0, 0, 0.15);
  }

  > input {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: 1;
    transform: translateY(-25%);
    appearance: none;
    background: red;
    transform-style: preserve-3d;
    opacity: 0;
    cursor: pointer;

    &:checked + label {
      transform: translateX(75%);
      color: #ffe175;

      &:before {
        opacity: 0.5;
        background: 50% 50%/100% 100%
          radial-gradient(#ffe175, transparent 55%, transparent);
        transform: translate(-50%, -50%) rotate(60deg);
      }

      &:after {
        transition: background 0.5s cubic-bezier(0.64, 0, 0.25, 1),
          box-shadow 1s cubic-bezier(0.64, 0, 0.25, 1);
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
      }
    }

    &:hover:checked + label:before {
      animation: ${sun} 10s linear infinite;
    }

    + label {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      color: rgba(255, 255, 255, 0.25);
      transition: all 0.3s cubic-bezier(0.64, 0, 0.25, 1);
      position: relative;

      &:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        left: 50%;
        top: 50%;
        transform-style: preserve-3d;
        transform: translate(-50%, -50%) rotate(0deg);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.64, 0, 0.25, 1);
        background: 50% 50%/50% 50%
          radial-gradient(#ffe175, transparent 55%, transparent);
        mask-image: repeating-conic-gradient(
          transparent 0 32deg,
          black 0 36deg
        );
      }

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        transform-style: preserve-3d;
        border-radius: 100%;
        transition: background 0.5s cubic-bezier(0.64, 0, 0.25, 1),
          box-shadow 0.3s cubic-bezier(0.64, 0, 0.25, 1);
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
        box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.75),
          0 0 0.5rem rgba(255, 255, 255, 0.25);
      }
    }
  }
`
