/** @jsxImportSource @emotion/react */
import { input } from '../../styles/ui-style';
import { BiPlus, BiMinus } from 'react-icons/bi';

const AmountInput = (props) => {
  const minusClickHandler = (event) => {
    event.preventDefault();
    props.onMinus();
  };

  const plusClickHandler = (event) => {
    event.preventDefault();
    props.onPlus();
  };

  return (
    <div css={input}>
      <button type="button" onClick={minusClickHandler}>
        <BiMinus />
      </button>
      <input
        type="button"
        onChange={props.onChange}
        {...props.input}
      />
      <button onClick={plusClickHandler}>
        <BiPlus />
      </button>
    </div>
  );
};

export default AmountInput;
