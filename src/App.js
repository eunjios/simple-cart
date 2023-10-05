import CartItem from './components/Cart/CartItem';
import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import Modal from './components/UI/Modal';
import { ITEMS } from './store/data';

function App() {
  return (
    <div>
      <Modal>
        {ITEMS.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            amount="1"
            src={item.imageUrl}
          />
        ))}
      </Modal>
      <Header />
      <Items ITEMS={ITEMS} />
    </div>
  );
}

export default App;
