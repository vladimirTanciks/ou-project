import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '../router/routes';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  // TODO: Fix type
  const isAuthenticated = useSelector(
    ({ auth }: RootState) => auth.isAuthenticated,
  );

  const renderComponent = (children?: JSX.Element) => {
    if (isAuthenticated) {
      return children || <Component />;
    }

    return <Redirect to={routes.HOME} />;
  };

  return (
    <Route {...rest} render={(routeProps) => renderComponent()}>
      {renderComponent(rest.children)}
    </Route>
  );
};
