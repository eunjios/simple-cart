/** @jsxImportSource @emotion/react */
import React from 'react';
import { header } from '../../styles/layout-style';
import HeaderCartButton from './HeaderCartButton';
import HeaderUserButton from './HeaderUserButton';

const Header = (props) => {
  return (
    <header css={header}>
      <h2>analogue keeper</h2>
      <div>
        <HeaderCartButton onClick={props.onOpen} />
        <HeaderUserButton />
      </div>
    </header>
  );
};

export default React.memo(Header);
