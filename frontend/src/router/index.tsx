import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Admin/Admin';
import Login from '../pages/Login/Login';
import Map from '../pages/ReportMap/ReportMap';
import Register from '../pages/Register/Register';

import { Report } from '../pages/Report/Report';

import { LayoutWithSidebar } from '../HOC/Layout/Layout';

import { ReportDetails } from '../pages/ReportMap/ReportDetails';

import { routes } from './routes';
import { PrivateRoute } from './PrivateRoutes';

const AppRouter = (): JSX.Element => (
  <Switch>
    <Route exact path={routes.HOME} component={Login} />

    <PrivateRoute path={routes.MAP}>
      <LayoutWithSidebar
        layoutChildren={<Map />}
        sidebarChildren={<ReportDetails />}
      />
    </PrivateRoute>

    <Route exact path={routes.ADMIN} component={Admin} />

    <Route exact path={routes.REGISTER} component={Register} />

    <Route exact path={routes.NEW_REPORT} component={Report} />
  </Switch>
);

export default AppRouter;
