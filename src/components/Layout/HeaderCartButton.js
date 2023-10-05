/** @jsxImportSource @emotion/react */
import { AiFillShopping } from 'react-icons/ai';
import { badge, button } from '../../styles/layout-style';

const HeaderCartButton = () => {
  return (
    <button css={button}>
      <AiFillShopping />
      <span css={badge}>22</span>
    </button>
  );
};

export default HeaderCartButton;
