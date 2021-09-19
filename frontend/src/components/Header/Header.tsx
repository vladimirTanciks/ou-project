import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

import { logout } from '../../redux/features/auth';

import { RootState } from '../../redux/store';

import { routes } from '../../router/routes';

import { Logo } from '../Logo/Logo';

import {
  StyledHeader,
  StyledLogout,
  StyledNav,
  StyledAccount,
  StyledSeparator,
} from './styled';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  const accountName = useSelector(
    (state: RootState) => state.auth.accountData?.user || '',
  );

  const handleLogout = (): void => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <Link to={routes.NEW_REPORT} style={{ marginRight: 2 }}>
          <Button
            style={{ marginRight: 10 }}
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
          />
          New report
        </Link>

        <StyledSeparator>|</StyledSeparator>

        <Link to={routes.ADMIN} style={{ marginRight: 2 }}>
          Manage reports
        </Link>

        <StyledSeparator>|</StyledSeparator>

        <Link to={routes.MAP} style={{ marginRight: 20 }}>
          Map
        </Link>

        <StyledAccount style={{ marginRight: 10 }}>{accountName}</StyledAccount>
        <StyledLogout onClick={handleLogout} style={{ color: '#1890ff' }}>
          Logout
        </StyledLogout>
      </StyledNav>
    </StyledHeader>
  );
};
