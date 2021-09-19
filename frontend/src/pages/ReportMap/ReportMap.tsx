import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';

import { fetchAllReports } from '../../redux/features/reports';

import { Map } from '../../components/Map/Map';
import { setActiveReport } from '../../redux/features/map';

const ReportMap = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getReports = async () => {
      const { payload } = await dispatch(fetchAllReports());

      if (payload?.reports.length > 0) {
        dispatch(setActiveReport(payload.reports[0]));
      }
    };

    getReports();
  }, [dispatch]);

  return <Map />;
};

export default ReportMap;
