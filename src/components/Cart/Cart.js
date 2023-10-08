/** @jsxImportSource @emotion/react */
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import {
  cartLi,
  cartUl,
  closeBtn,
} from '../../styles/cart-style';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const closeHandler = () => {
    props.onClose();
  };

  const orderHandler = () => {
    // TODO: 서버에 보내기
    props.onClose(); // 모달창 닫기
  };

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id} css={cartLi}>
      <CartItem
        id={item.id}
        title={item.title}
        price={item.price}
        amount={item.amount}
        src={item.imageUrl}
      />
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <div css={closeBtn}>
        <button onClick={closeHandler}>
          <AiOutlineClose />
        </button>
      </div>
      <ul css={cartUl}>{cartItems}</ul>
      <CartTotal onOrder={orderHandler} />
    </Modal>
  );
};

export default React.memo(Cart);
