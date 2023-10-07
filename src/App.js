import React, { useState } from 'react';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import { ITEMS } from './store/data';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={closeCartModal} />}
      <Header onOpen={openCartModal} />
      <Items ITEMS={ITEMS} />
    </CartProvider>
  );
}

export default App;
