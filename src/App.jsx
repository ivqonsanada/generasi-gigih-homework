import { useEffect, useState } from 'react';
import IndexPage from 'pages';
import CreatePlaylistPage from 'pages/create-playlist';
import './App.css';
import { useDispatch } from 'react-redux';
import { login } from 'store/user';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from 'components/private-route';
import Header from './components/header';
import { getProfile, getSearchTracks } from './api/spotify';
import { getAccessTokenFromURL } from './api/auth';
import initialTracks from './api/data';

function App() {
  const [user, setUser] = useState({});
  const [trackList, setTrackList] = useState(initialTracks);
  const dispatch = useDispatch();

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
      type: 'track',
      limit: 12,
    };
    getSearchTracks(options).then(({ data }) => {
      const selectedTracks = JSON.parse(localStorage.getItem('selectedTracks')) || [];
      setTrackList([...selectedTracks, ...data.tracks.items]);
    });
  };

  return (
    <Router>
      <Header user={user} handleSearch={handleSearch} />
      <Switch>
        <PrivateRoute exact path="/create-playlist">
          <CreatePlaylistPage trackList={trackList} user={user} />
        </PrivateRoute>
        <Route exact path="/">
          <IndexPage user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;