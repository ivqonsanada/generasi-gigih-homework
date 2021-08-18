import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { store } from 'store';

const IndexPage = () => {
  const history = useHistory();

  useEffect(() => {
    const isAuthenticated = !!store.getState().user.accessToken;
    console.log(isAuthenticated);
    if (isAuthenticated) history.push('/create-playlist');
  }, [history, store.getState().user]);

  return (
    <div>
      <h1>You need to login before you can access the app.</h1>
    </div>
  );
};

export default IndexPage;
