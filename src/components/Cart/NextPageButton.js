/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { button, badge } from '../../styles/ui-style';
import {
  wideBtn,
  orderBadgePosition,
} from '../../styles/cart-style';

const NextPageButton = (props) => {
  const { totalAmount } = useContext(CartContext);

  return (
    <div>
      <button
        css={[button, wideBtn]}
        onClick={props.onNext}
      >
        <span>배송지 입력</span>
        <span css={[badge, orderBadgePosition]}>
          {totalAmount}
        </span>
      </button>
    </div>
  );
};

export default NextPageButton;
