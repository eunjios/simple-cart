import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
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
        action.item.amount
      );

      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE': {
      const selectedItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const selectedItem = state.items[selectedItemIndex];
      let updatedItems = [];
      if (selectedItem.amount > 1) {
        const updatedItem = {
          ...selectedItem,
          amount: selectedItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[selectedItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter(
          (item) => item.id !== action.id
        );
      }

      const updatedTotalPrice =
        state.totalPrice - selectedItem.price;

      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        totalAmount: state.totalAmount - 1,
      };
    }
    case 'RESET': {
      return defaultCartState;
    }
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

  const resetCartHandler = () => {
    dispatchCart({ type: 'RESET' });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalAmount: cartState.totalAmount,
    user: cartState.user,
    formIsValid: cartState.formIsValid,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    resetCart: resetCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
