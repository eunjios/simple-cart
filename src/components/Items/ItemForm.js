/** @jsxImportSource @emotion/react */
import { addButton } from '../../styles/item-style';
import { button } from '../../styles/ui-style';
import AmountInput from '../UI/AmountInput';

const ItemForm = () => {
  return (
    <form>
      <AmountInput
        input={{
          type: 'number',
          min: '1',
          max: '10',
          defaultValue: '1',
        }}
      />
      <button css={[button, addButton]}>add to cart</button>
    </form>
  );
};

export default ItemForm;
