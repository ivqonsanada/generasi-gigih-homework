import './App.css';
import data from './api/data'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      {data.map((music) => (
        <div style={{ margin: "1em" }}>
          <Card data={music} />
        </div>
      ))}
    </div>
  );
}

export default App;
