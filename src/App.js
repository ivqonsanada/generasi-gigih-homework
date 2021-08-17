import { useEffect, useState } from "react";
import { getAccessTokenFromURL } from "./api/auth"
import { getProfile, getSearchTracks } from "./api/spotify"
import Header from './components/header';
import Playlist from "components/playlist";
import initialTracks from './api/data'
import './App.css';
import { useDispatch } from "react-redux";
import { login } from "store/user";

function App() {
  const [user, setUser] = useState({});
  const [trackList, setTrackList] = useState(initialTracks)
  const dispatch = useDispatch()

  useEffect(() => {
    const payload = getAccessTokenFromURL();
    if (payload?.accessToken) {
      dispatch(login(payload.accessToken));
      getProfile().then(({ data }) => {
        setUser(data);
      });
    }
  }, [dispatch]);

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
      <Header user={user} handleSearch={handleSearch}></Header>

      <Playlist user={user} data={trackList} ></Playlist>
    </div>
  );
}

export default App;
