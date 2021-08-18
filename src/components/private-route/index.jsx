import { Redirect, Route } from 'react-router-dom';
import { store } from 'store';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, ...props }) => {
  const isAuthenticated = !!store.getState().user?.accessToken;
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PrivateRoute;
