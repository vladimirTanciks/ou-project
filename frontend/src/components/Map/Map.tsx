import { FC } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveReport, setMapCoords } from '../../redux/features/map';

import { Report } from '../../types';

import { RootState } from '../../redux/store';

import { Marker } from './Marker';

import { StyledCenterMarker, Wrapper } from './styled';

const MAP_SETTINGS = {
  center: {
    lat: 52.184978,
    lng: -0.518843,
  },
  zoom: 8,
};

interface IProps {
  newReport?: boolean;
}

export const Map: FC<IProps> = ({ newReport }): JSX.Element => {
  const dispatch = useDispatch();

  const centerCoords = useSelector((state: RootState) => state.map.coords);
  const reports = useSelector((state: RootState) => state.reports.data);

  const createMapOptions = () => ({
    panControl: false,
    mapTypeControl: true,
  });

  const handleSetActiveDump = (report: Report): void => {
    dispatch(setActiveReport(report));
  };

  const setSelectedCoords = (coords: Coords): void => {
    if (!newReport) return;

    dispatch(setMapCoords(coords));
  };

  const reportsAvailable = reports && reports.length > 0;

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAB3sHibk89ISkpOOil1EqCn3e0vIgx_3w' }}
        defaultCenter={MAP_SETTINGS.center}
        defaultZoom={MAP_SETTINGS.zoom}
        options={createMapOptions}
        onChange={(val) => setSelectedCoords(val.center)}
        center={centerCoords.lng ? centerCoords : MAP_SETTINGS.center}
      >
        {reportsAvailable &&
          reports.map((report: Report) => {
            const [lat, lng] = report.location.split(',');

            return (
              <Marker
                lat={lat}
                lng={lng}
                key={report.id}
                image={report.image}
                active={false}
                onClick={() => handleSetActiveDump(report)}
              />
            );
          })}
      </GoogleMapReact>

      {newReport && <StyledCenterMarker />}
    </Wrapper>
  );
};
