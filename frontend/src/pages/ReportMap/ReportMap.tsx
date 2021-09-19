import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';

import { fetchAllReports } from '../../redux/features/reports';

import { Map } from '../../components/Map/Map';

const ReportMap = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReports());
  }, [dispatch]);

  return <Map />;
};

export default ReportMap;
