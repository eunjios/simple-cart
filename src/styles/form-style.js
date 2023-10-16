import { css } from '@emotion/react';

export const formContainer = css`
  overflow-y: auto;
  padding: 16px;
`;

export const inputContainer = css`
  padding: 4px;
  font-size: 16px;
  font-family: 'Jost';
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & span {
    margin: 3px;
    color: #ccc;
  }
`;

export const labelStyle = (isRequired) => {
  const baseStyle = {
    display: 'inline-block',
    width: '128px',
    fontWeight: 400,
  };

  if (isRequired) {
    baseStyle['&::after'] = {
      content: '"*"',
      color: '#c05850',
    };
  }

  return css(baseStyle);
};

export const inputStyle = css`
  border-radius: 0;
  border: 1.2px solid #ccc;
  height: 32px;
  padding: 4px 8px;
  outline: none;

  &:focus {
    border-color: #444;
  }
`;

export const narrow = css`
  width: 64px;
`;

export const wide = css`
  flex-grow: 1;
`;

export const actionsContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding: 16px 0 0 0;
  border-top: 1px solid #f4f4f4;

  & p {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    & p {
      display: none;
    }
  }
`;

export const noBorder = css`
  border: 1px solid transparent;
  &:hover {
    border: 1px solid transparent;
  }
`;
