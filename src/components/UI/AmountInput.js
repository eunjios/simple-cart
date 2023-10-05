/** @jsxImportSource @emotion/react */
import { input } from '../../styles/ui-style';
import { BiPlus, BiMinus } from 'react-icons/bi';

const AmountInput = (props) => {
  return (
    <div css={input}>
      <button type="button" onClick={props.onMinus}>
        <BiMinus />
      </button>
      <input
        type="button"
        onChange={props.onChange}
        {...props.input}
      />
      <button onClick={props.onPlus}>
        <BiPlus />
      </button>
    </div>
  );
};

export default AmountInput;
