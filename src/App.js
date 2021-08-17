import { useEffect, useState } from "react";
import { getAccessTokenFromURL } from "./api/auth"
import { getProfile, getSearchTracks } from "./api/spotify"
import Card from './components/card'
import Header from './components/header';
import initialData from './api/data'
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [trackList, setTrackList] = useState(initialData)

  useEffect(() => {
    const payload = getAccessTokenFromURL();
    if (payload?.access_token) {
      setAuth(payload);
      getProfile(payload.access_token).then((res) => {
        setUser(res);
      });
    }
  }, []);

  const handleSearch = (query) => {
    const options = {
      q: query,
      type: "track",
      limit: 12,
    };
    getSearchTracks(auth.access_token, options).then(({ data }) => {
      setTrackList(data.tracks.items);
    });
  }

  return (
    <div className="App">
      <Header user={user} auth={auth} handleSearch={handleSearch}></Header>

      {trackList.map((music) => (
        <div style={{ margin: "1em" }} key={music.id}>
          <Card data={music} />
        </div>
      ))}
    </div>
  );
}

export default App;
