import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import { ITEMS } from './store/data';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartModal = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCartModal = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const items = useMemo(() => ITEMS, []);

  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={closeCartModal} />}
      <Header onOpen={openCartModal} />
      <Items ITEMS={items} />
    </CartProvider>
  );
}

export default App;
