import './App.css';
import data from './api/data'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;
