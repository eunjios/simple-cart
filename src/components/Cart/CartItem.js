/** @jsxImportSource @emotion/react */
import AmountInput from '../UI/AmountInput';
import {
  cartItem,
  img,
  container,
  amountStyle,
  itemPriceStyle,
  itemInfo,
} from '../../styles/cart-style';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toLocaleString('ko-KO')}원`;
  const amount = `상품 주문 수량: ${props.amount}개`;
  const totalPriceOfItem = `${(
    props.price * props.amount
  ).toLocaleString('ko-KO')}원`;

  const currentItem = {
    id: props.id,
    title: props.title,
    price: props.price,
    amount: props.amount,
    imageUrl: props.src,
  };

  const plusOrderAmountHandler = () => {
    if (currentItem.amount >= 10) return;
    cartCtx.addItem({ ...currentItem, amount: 1 });
  };

  const minusOrderAmountHandler = () => {
    cartCtx.removeItem(currentItem.id);
  };

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
            onPlus={plusOrderAmountHandler}
            onMinus={minusOrderAmountHandler}
            input={{
              type: 'number',
              value: currentItem.amount,
              min: '1',
              max: '10',
              readOnly: true,
            }}
          />
        </span>
      </div>
      <div css={[container, itemPriceStyle]}>
        <span>상품 금액</span>
        <span>{totalPriceOfItem}</span>
      </div>
    </div>
  );
};

export default CartItem;
