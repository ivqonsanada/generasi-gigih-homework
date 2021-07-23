import './App.css';
import data from './api/data'

function App() {
  return (
    <div className="App">
      <img src={data.album.images[0].url} alt={data.album.name + ""} />
      <h1>{data.album.name}</h1>
      <h2>{data.album.artists[0].name}</h2>
      <button>Select</button>
    </div>
  );
}

export default App;
