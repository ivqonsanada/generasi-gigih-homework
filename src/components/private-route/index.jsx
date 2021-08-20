import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...props }) => {
  const { accessToken } = useSelector((state) => state.user);
  const isAuthenticated = accessToken;
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      render={({ location }) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />
      ))}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default PrivateRoute;
