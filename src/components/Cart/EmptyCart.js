/** @jsxImportSource @emotion/react */
import React from 'react';
import {
  emptyContainer,
  wideBtn,
} from '../../styles/cart-style';
import { button } from '../../styles/ui-style';

const EmptyCart = (props) => {
  return (
    <div css={emptyContainer}>
      <h2>Empty Cart</h2>
      <p>There is no items in your cart</p>
      <div>
        <button
          css={[button, wideBtn]}
          type="button"
          onClick={props.onClose}
        >
          쇼핑하러 가기
        </button>
      </div>
    </div>
  );
};

export default React.memo(EmptyCart);
