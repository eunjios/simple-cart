/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { button, badge } from '../../styles/ui-style';
import {
  wideBtn,
  orderBadgePosition,
} from '../../styles/cart-style';
import { noBorder } from '../../styles/form-style';

const OrderButton = (props) => {
  const { totalAmount } = useContext(CartContext);

  return (
    <div>
      <button
        css={[button, noBorder]}
        type="button"
        onClick={props.onPrev}
      >
        이전으로
      </button>
      <button
        css={[button, wideBtn]}
        // onClick={props.onOrder}
      >
        <span>총 주문하기</span>
        <span css={[badge, orderBadgePosition]}>
          {totalAmount}
        </span>
      </button>
    </div>
  );
};

export default OrderButton;
