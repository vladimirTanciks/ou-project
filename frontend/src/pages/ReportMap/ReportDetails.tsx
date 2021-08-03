import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import { Image, List, ListElement } from './styled';

export const ReportDetails = (): JSX.Element => {
  const {
    author,
    createdAt,
    description,
    image,
    title,
    type
  } = useSelector((state: RootState) => state.map.active);

  return (
    <div>
      <List>
        <ListElement>{author}</ListElement>
        <ListElement>{title}</ListElement>
        <ListElement>{createdAt}</ListElement>
        <ListElement>{description}</ListElement>
        <ListElement>{type}</ListElement>
      </List>

      <Image src={image} alt={title} />
    </div>
  )


}
