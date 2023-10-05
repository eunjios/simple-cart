/** @jsxImportSource @emotion/react */
import { input } from '../../styles/ui-style';
import { BiPlus, BiMinus } from 'react-icons/bi';

const AmountInput = (props) => {
  return (
    <div css={input}>
      <button>
        <BiMinus />
      </button>
      <input {...props.input} />
      <button>
        <BiPlus />
      </button>
    </div>
  );
};

export default AmountInput;
