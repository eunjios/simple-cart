import Items from './components/Items/Items';
import Header from './components/Layout/Header';
import { ITEMS } from './store/data';

function App() {
  return (
    <div>
      <Header />
      <Items ITEMS={ITEMS} />
    </div>
  );
}

export default App;
