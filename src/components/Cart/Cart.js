/** @jsxImportSource @emotion/react */
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const orderHandler = () => {
    // TODO: 서버에 보내기
    props.onClose(); // 모달창 닫기
  };

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id}>
      <CartItem
        title={item.title}
        price={item.price}
        amount={item.amount}
        src={item.imageUrl}
      />
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul>{cartItems}</ul>
      <CartTotal onOrder={orderHandler} />
    </Modal>
  );
};

export default Cart;
