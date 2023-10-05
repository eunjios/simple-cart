/** @jsxImportSource @emotion/react */
import { header } from '../../styles/layout-style';
import HeaderCartButton from './HeaderCartButton';
import HeaderUserButton from './HeaderUserButton';

const Header = () => {
  return (
    <header css={header}>
      <h2>analogue keeper</h2>
      <div>
        <HeaderCartButton />
        <HeaderUserButton />
      </div>
    </header>
  );
};

export default Header;
