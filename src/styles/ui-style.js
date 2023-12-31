import { css } from '@emotion/react';

export const button = css`
  background: transparent;
  color: #c05850;
  border: 1px solid #c05850;
  border-radius: 32px;
  padding: 8px;
  margin: 8px 0;
  cursor: pointer;

  :hover {
    background: #c0585008;
    color: #c05850bf;
    border-color: #c05850bf;
  }
`;

export const input = css`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  overflow: hidden;

  & input {
    background: transparent;
    flex-grow: 1;
    text-align: center;
    border: none;
    font-family: jost;
    font-weight: 600;
  }

  & button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  & button:hover {
    opacity: 0.5;
  }
`;

export const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const modal = css`
  position: fixed;
  top: 15vh;
  left: 50%;
  transform: translateX(-50%);
  max-width: 920px;
  width: 80%;
  background-color: #fff;
  padding: 16px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-up 300ms ease-out forwards;

  @media (max-width: 480px) {
    top: 10vh;
    left: 5%;
    width: 90%;
    height: 80vh;
  }

  @media (max-height: 560px) {
    top: 10vh;
    height: 80vh;
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;

export const badge = css`
  display: inline-flex;
  padding: 1px 4px;
  background: #c05850;
  border-radius: 8px;
  color: #fff;
  font-size: 8px;
  font-weight: 600;
`;
