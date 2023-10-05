/** @jsxImportSource @emotion/react */
import { button } from '../../styles/layout-style';
import { BiSolidUser } from 'react-icons/bi';

const HeaderUserButton = () => {
  return (
    <button css={button}>
      <BiSolidUser />
    </button>
  );
};

export default HeaderUserButton;
