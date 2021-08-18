import { Redirect, Route } from "react-router-dom";
import store from "store";
const PrivateRoute = ({ children, ...props }) => {
  const isAuthenticated = !!store.getState().user?.accessToken;
  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;