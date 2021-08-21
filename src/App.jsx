import { useEffect } from 'react';
import IndexPage from 'pages';
import CreatePlaylistPage from 'pages/create-playlist';
import 'App.css';
import { useDispatch } from 'react-redux';
import { login, storeUserData } from 'store/user';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from 'components/private-route';
import { useAxios } from 'lib/useAxios';
import { getAccessTokenFromURL } from 'api/auth';
import useSpotify from 'lib/useSpotify';

function App() {
  const dispatch = useDispatch();
  const { getProfile } = useSpotify();

  useAxios();

  useEffect(() => {
    const payload = getAccessTokenFromURL();
    if (payload?.accessToken) {
      dispatch(login(payload.accessToken));
      getProfile().then(({ data }) => {
        dispatch(storeUserData(data));
      });
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/create-playlist">
          <CreatePlaylistPage />
        </PrivateRoute>
        <Route exact path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
