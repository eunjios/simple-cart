import React, { useState } from 'react';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import { ITEMS } from './store/data';
import Cart from './components/Cart/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      {isCartOpen && <Cart onClose={closeCartModal} />}
      <Header onOpen={openCartModal} />
      <Items ITEMS={ITEMS} />
    </div>
  );
}

export default App;
