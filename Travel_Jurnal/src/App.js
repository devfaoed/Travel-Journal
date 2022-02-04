
import './App.css';

import Card from './card';
import data from './db';

function App() {

  const dataBase = data.map(items => {
    return <Card key={items.id} items={items} />    
  })

  return (
    <div className="App">
      <h2>TRAVEL JOURNAL</h2>
          {dataBase}
    </div>
  );
}

export default App;
