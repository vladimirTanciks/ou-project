import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Admin/Admin';
import Login from '../pages/Login/Login';
import Map from '../pages/ReportMap/ReportMap';

import { Report } from '../pages/Report/Report';

import { LayoutWithSidebar } from '../HOC/Layout/Layout';

import { ReportDetails } from '../pages/ReportMap/ReportDetails';

import { routes } from './routes';

const AppRouter = (): JSX.Element => (
  <Switch>
    <Route exact path={routes.HOME} component={Login} />

    <Route path={routes.MAP}>
      <LayoutWithSidebar
        layoutChildren={<Map />}
        sidebarChildren={<ReportDetails />}
      />
    </Route>

    <Route exact path={routes.ADMIN} component={Admin} />

    <Route exact path={routes.NEW_REPORT} component={Report} />
  </Switch>
);

export default AppRouter;
