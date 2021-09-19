import { FC } from 'react';
import { DumpImage } from './styled';

interface MarkerProps {
  lat: string;
  lng: string;
  onClick?: any;
  active?: boolean;
  image: string;
}

export const Marker: FC<MarkerProps> = ({ onClick, active, image }) => (
  <DumpImage
    src={image}
    alt="marker"
    onClick={onClick}
    style={{ borderColor: active ? '#1890ff' : 'white' }}
  />
);
