/** @jsxImportSource @emotion/react */
import AmountInput from '../UI/AmountInput';
import {
  cartItem,
  img,
  container,
  amountStyle,
  totalPriceStyle,
  itemInfo,
} from '../../styles/cart-style';

const CartItem = (props) => {
  const price = `${props.price.toLocaleString('ko-KO')}원`;
  const amount = `상품 주문 수량: ${props.amount}개`;
  const totalPriceOfItem = `${(
    props.price * props.amount
  ).toLocaleString('ko-KO')}원`;
  return (
    <div css={cartItem}>
      <div css={itemInfo}>
        <span>
          <img
            css={img}
            src={props.src}
            alt={props.title}
          />
        </span>
        <span>
          <h4>{props.title}</h4>
          <h5>{price}</h5>
        </span>
      </div>
      <div css={[container, amountStyle]}>
        <span>{amount}</span>
        <span>
          <AmountInput
            input={{
              type: 'number',
              min: '1',
              max: '10',
              defaultValue: '1',
            }}
          />
        </span>
      </div>
      <div css={[container, totalPriceStyle]}>
        <span>상품 금액</span>
        <span>{totalPriceOfItem}</span>
      </div>
    </div>
  );
};

export default CartItem;
