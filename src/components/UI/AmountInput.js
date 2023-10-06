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
      <button onClick={minusClickHandler}>
        <BiMinus />
      </button>
      <input
        onChange={props.onChange}
        readOnly={props.input.readOnly}
        {...props.input}
      />
      <button onClick={plusClickHandler}>
        <BiPlus />
      </button>
    </div>
  );
};

export default AmountInput;
