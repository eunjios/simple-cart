/** @jsxImportSource @emotion/react */
import { AiFillShopping } from 'react-icons/ai';
import {
  cartBadgePosition,
  button,
} from '../../styles/layout-style';
import { badge } from '../../styles/ui-style';

const HeaderCartButton = (props) => {
  return (
    <button css={button} onClick={props.onClick}>
      <AiFillShopping />
      <span css={[badge, cartBadgePosition]}>22</span>
    </button>
  );
};

export default HeaderCartButton;
