import { FC } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveReport, setMapCoords } from '../../redux/features/map';

import { IReport } from '../../entities/report';

import { Marker } from './Marker';

import { StyledCenterMarker, Wrapper } from './styled';

import img1 from '../../images/d1.jpg';
import img2 from '../../images/d2.jpg';
import { RootState } from '../../redux/store';

const MAP_SETTINGS = {
  center: {
    lat: 55.871047,
    lng: 26.520195,
  },
  zoom: 15,
};

export const Map: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const centerCoords = useSelector((state: RootState) => state.map.coords);

  const createMapOptions = () => ({
    panControl: false,
    mapTypeControl: true,
  });

  const reports = [
    {
      active: true,
      author: 'vladimirs tanciks',
      image: img1,
      cleaned: false,
      createdAt: '5 May 2021',
      description: 'Lots of glass scattered around',
      lat: 55.896066,
      lng: 26.570458,
      title: 'Pile of glass near lake',
      type: 'automotive',
      updatedAt: '5 May 2021',
    },
    {
      active: true,
      author: 'inga tancika',
      image: img2,
      cleaned: false,
      createdAt: '15 April 2021',
      description: 'Somebody thrown used tyres',
      lat: 55.893295,
      lng: 26.568197,
      title: 'Used tyres thrown in bushes',
      type: 'glass',
      updatedAt: '18 April 2021',
    },
  ];

  const handleSetActiveDump = (report: IReport): void => {
    dispatch(setActiveReport(report));
  };

  const setSelectedCoords = (coords: Coords): void => {
    dispatch(setMapCoords(coords));
  };

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
        {reports.map((report: IReport) => (
          <Marker
            lat={report.lat}
            lng={report.lng}
            key={report.title}
            img={report.image}
            active={false}
            onClick={() => handleSetActiveDump(report)}
          />
        ))}
      </GoogleMapReact>

      <StyledCenterMarker />
    </Wrapper>
  );
};
