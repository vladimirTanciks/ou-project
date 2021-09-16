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
        <Link to={routes.NEW_REPORT}>
          <Button type="primary" shape="circle" icon={<PlusOutlined />} />
        </Link>

        <StyledAccount>{accountName}</StyledAccount>
        <StyledSeparator>|</StyledSeparator>
        <StyledLogout onClick={handleLogout}>logout</StyledLogout>
      </StyledNav>
    </StyledHeader>
  );
};
