/** @jsxImportSource @emotion/react */
import {
  totalPriceContainer,
  wideBtn,
  orderBadgePosition,
} from '../../styles/cart-style';
import { button, badge } from '../../styles/ui-style';

const CartTotal = (props) => {
  // const total = `${props.total.toLocaleString('ko-KO')}원`;
  const total = '13,000원';
  const amount = 22;

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
