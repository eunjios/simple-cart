import Items from './components/Items/Items';
import { ITEMS } from './store/data';

function App() {
  return (
    <div>
      <Items ITEMS={ITEMS} />
    </div>
  );
}

export default App;
