import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // items 업데이트
      const selectedItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const selectedItem = state.items[selectedItemIndex];

      let updatedItems = [];
      if (selectedItem) {
        const updatedItem = {
          ...selectedItem,
          amount: selectedItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[selectedItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      // totalPrice 계산
      const updatedTotalPrice =
        state.totalPrice +
        action.item.price * action.item.amount;

      // totalAmount 계산
      const updatedTotalAmount = state.items.reduce(
        (acc, item) => {
          return acc + item.amount;
        },
        action.item.amount // TODO: 고치기
      );

      return {
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE':
      return defaultCartState;
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
