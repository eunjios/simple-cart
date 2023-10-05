/** @jsxImportSource @emotion/react */
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { ITEMS } from '../../store/data';
import CartTotal from './CartTotal';

const Cart = (props) => {
  const orderHandler = () => {
    // TODO: 서버에 보내기
    props.onClose(); // 모달창 닫기
  };
  const cartItems = ITEMS.map((item) => (
    <li>
      <CartItem
        key={item.id}
        title={item.title}
        price={item.price}
        amount="1"
        src={item.imageUrl}
      />
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      {/* <ul>{cartItems}</ul> */}
      <CartTotal onOrder={orderHandler} />
    </Modal>
  );
};

export default Cart;
