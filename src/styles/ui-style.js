import { css } from '@emotion/react';

export const button = css`
  background: transparent;
  color: #c05850;
  border: 1px solid #c05850;
  border-radius: 32px;
  padding: 8px;
  font-family: jost;
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
  gap: 8px;

  & input {
    flex-grow: 1;
    text-align: center;
    border: 0px;
    font-family: jost;
  }

  & button {
    background: transparent;
    border: 0px;
    cursor: pointer;
  }

  & button:hover {
    opacity: 0.5;
  }
`;
