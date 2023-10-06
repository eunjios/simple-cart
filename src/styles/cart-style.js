import { css } from '@emotion/react';

export const cartItem = css`
  padding: 16px 0;
  border-bottom: 1px solid #f4f4f4;
`;

export const itemInfo = css`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 480px) {
    /* gap: 0; */
  }
`;

export const img = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 480px) {
    /* display: none; */
  }

  @media (max-width: 240px) {
    display: none;
  }
`;

export const container = css`
  margin-top: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const amountStyle = css`
  background-color: #f4f4f4;
  padding: 12px 16px;
  @media (max-width: 480px) {
    /* display: none; */
  }
`;

export const itemPriceStyle = css`
  background: transparent;
  padding: 8px;
  font-weight: 600;
  @media (max-width: 240px) {
    display: none;
  }
`;

export const totalPriceContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  & p {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    & p {
      display: none;
    }
  }

  @media (max-width: 240px) {
    padding: 4px;
  }
`;

export const wideBtn = css`
  width: 160px;
  font-weight: 600;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const orderBadgePosition = css`
  position: relative;
  top: -2px;
  right: -8px;
`;

export const cartUl = css`
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 50vh;
  overflow: auto;
  @media (max-width: 480px) {
    padding: 8px;
    max-height: calc(80vh - 160px);
  }
  @media (max-height: 560px) {
    max-height: calc(80vh - 160px);
  }
`;

export const cartLi = css`
  padding: 0;
  margin: 0;
`;

export const closeBtn = css`
  margin: 8px;

  & button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #d4d4d4;
    font-size: 20px;
  }

  & button:hover {
    color: #000;
  }

  @media (max-width: 480px) {
    margin: 0;

    & button {
      padding: 0;
      margin: 0;
      line-height: 0px;
    }
  }
`;
