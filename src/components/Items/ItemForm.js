/** @jsxImportSource @emotion/react */
import { useContext } from 'react';
import { addButton } from '../../styles/item-style';
import { button } from '../../styles/ui-style';
import AmountInput from '../UI/AmountInput';
import CartContext from '../../store/cart-context';

const ItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem(props.item);
    console.log(props.item);
    console.log(cartCtx.items);
  };

  return (
    <form onSubmit={submitHandler}>
      <AmountInput
        onChange={props.onChange}
        onPlus={props.onPlus}
        onMinus={props.onMinus}
        input={{
          type: 'number',
          value: props.value,
          min: '1',
          max: '10',
        }}
      />
      <button css={[button, addButton]} type="submit">
        add to cart
      </button>
    </form>
  );
};

export default ItemForm;
