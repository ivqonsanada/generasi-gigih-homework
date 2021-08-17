import { useEffect, useState } from "react";
import { getAccessTokenFromURL } from "./api/auth"
import { getProfile, getSearchTracks } from "./api/spotify"
import Header from './components/header';
import Playlist from "components/playlist";
import initialTracks from './api/data'
import './App.css';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const [trackList, setTrackList] = useState(initialTracks)

  useEffect(() => {
    const payload = getAccessTokenFromURL();
    if (payload?.accessToken) {
      setAuth(payload);
      getProfile().then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  const handleSearch = (query) => {
    const options = {
      q: query,
      type: "track",
      limit: 12,
    };
    getSearchTracks(options).then(({ data }) => {
      const selectedTracks = JSON.parse(localStorage.getItem('selectedTracks')) || [];
      setTrackList([...selectedTracks, ...data.tracks.items]);
    });
  }

  return (
    <div className="App">
      <Header user={user} auth={auth} handleSearch={handleSearch}></Header>

      <Playlist data={trackList} auth={auth} user={user}></Playlist>
    </div>
  );
}

export default App;
