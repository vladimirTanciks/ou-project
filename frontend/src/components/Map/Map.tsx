
import { FunctionComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { useDispatch } from 'react-redux';
import { setActiveReport } from '../../redux/features/map';

import { IReport } from '../../entities/report';

import { Marker } from './Marker';
import { Wrapper } from './styled';

import img1 from '../../images/d1.jpg';
import img2 from '../../images/d2.jpg';


export const Map: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const MAP_SETTINGS = {
    center: {
      lat: 55.871047,
      lng: 26.520195
    },
    zoom: 15
  };

  const createMapOptions = () => (
    {
      panControl: false,
      mapTypeControl: true

    }
  );

  const reports = [{
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
    updatedAt: '5 May 2021'
  }, {

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
    updatedAt: '18 April 2021'
  }];

  const handleSetActiveDump = (report: IReport): void => {
    dispatch(setActiveReport(report))
  }



  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAB3sHibk89ISkpOOil1EqCn3e0vIgx_3w' }}
        defaultCenter={MAP_SETTINGS.center}
        defaultZoom={MAP_SETTINGS.zoom}
        options={createMapOptions}
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
    </Wrapper>
  )
}