import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { routes } from '../router/routes';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector(({ auth }: any) => auth.isAuthenticated)
  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={routeProps =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={routes.LOGIN} />
        )
      }
    ></Route>
  );
};


export default PrivateRoute;