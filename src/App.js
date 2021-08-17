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
      const selectedTracks = JSON.parse(localStorage.getItem('selectedTracks')) || [];
      setTrackList([...selectedTracks, ...data.tracks.items]);
    });
  }

  return (
    <div className="App">
      <Header user={user} auth={auth} handleSearch={handleSearch}></Header>

      <Playlist data={trackList}></Playlist>
    </div>
  );
}

export default App;
