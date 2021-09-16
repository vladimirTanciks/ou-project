import { FC } from 'react';
import { Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { clearNotification } from '../../redux/features/ui';
import { RootState } from '../../redux/store';

export const Notificator: FC = () => {
  const dispatch = useDispatch();

  const { message, type } =
    useSelector((state: RootState) => state.ui.notificator) || {};

  const handleClose = () => {
    dispatch(clearNotification());
  };
  return (
    <div style={{ width: '100%' }}>
      {message ? (
        <Alert
          message={message}
          type={type}
          closable
          afterClose={handleClose}
        />
      ) : null}
    </div>
  );
};
