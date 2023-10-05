import { css } from '@emotion/react';

export const cartItem = css`
  padding: 16px 0;
  border-bottom: 1px solid #f4f4f4;
`;

export const itemInfo = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const img = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const container = css`
  margin-top: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const amountStyle = css`
  background-color: #f4f4f4;
  padding: 12px 16px;
`;

export const totalPriceStyle = css`
  background-color: transparent;
  padding: 8px;
  font-weight: 600;
`;
