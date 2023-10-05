import { css } from '@emotion/react';

export const item = css`
  width: 200px;
  margin: 16px;

  & img {
    width: 100%;
  }
`;

export const info = css`
  color: #8f8f8f;
  font-size: 12px;
  padding: 4px 0;

  & span {
    margin-right: 8px;
  }
`;

export const addButton = css`
  width: 100%;
`;

export const itemsUl = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const itemsLi = css`
  padding: 0;
  margin: 0;
`;
