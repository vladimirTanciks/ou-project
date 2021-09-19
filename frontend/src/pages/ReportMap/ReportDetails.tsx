import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import { Image, List, ListElement } from './styled';

export const ReportDetails = (): JSX.Element => {
  const { user, size, details, image, type, id } = useSelector(
    (state: RootState) => state.map.active,
  );

  return (
    <div>
      <List>
        <ListElement>User: {user}</ListElement>

        <ListElement>Size: {size}</ListElement>
        <ListElement>Type: {type}</ListElement>
        <ListElement>Details: {details}</ListElement>
      </List>

      <Image src={image} alt={id} />
    </div>
  );
};
