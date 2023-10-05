/** @jsxImportSource @emotion/react */
import { AiFillShopping } from 'react-icons/ai';
import {
  cartBadgePosition,
  button,
} from '../../styles/layout-style';
import { badge } from '../../styles/ui-style';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { totalAmount } = cartCtx;

  return (
    <button css={button} onClick={props.onClick}>
      <AiFillShopping />
      {totalAmount > 0 && (
        <span css={[badge, cartBadgePosition]}>
          {totalAmount}
        </span>
      )}
    </button>
  );
};

export default HeaderCartButton;
