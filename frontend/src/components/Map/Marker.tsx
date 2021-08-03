import { FunctionComponent } from 'react';
import { DumpImage } from './styled'

interface MarkerProps {
  lat: number;
  lng: number;
  onClick: any;
  active?: boolean;
  img: string
}

export const Marker: FunctionComponent<MarkerProps> = ({ onClick, active, img }) => (
  <DumpImage src={img} alt="swdwdw" onClick={onClick} />
);