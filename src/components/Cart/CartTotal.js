/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import {
  totalPriceContainer,
  wideBtn,
  orderBadgePosition,
} from '../../styles/cart-style';
import { button, badge } from '../../styles/ui-style';
import CartContext from '../../store/cart-context';

const CartTotal = (props) => {
  const cartCtx = useContext(CartContext);

  const total = `${cartCtx.totalPrice.toLocaleString(
    'ko-KO'
  )}원`;
  const amount = cartCtx.totalAmount;

  return (
    <div css={totalPriceContainer}>
      <div>
        <p>총 주문금액</p>
        <h3>{total}</h3>
      </div>
      <div>
        <button
          css={[button, wideBtn]}
          onClick={props.onOrder}
        >
          <span>총 주문하기</span>
          <span css={[badge, orderBadgePosition]}>
            {amount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
