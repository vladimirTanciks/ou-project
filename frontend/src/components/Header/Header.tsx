import { Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';

import { logout } from '../../redux/features/auth';

import { RootState } from '../../redux/store';

import { Logo } from '../Logo/Logo';

import { StyledHeader, StyledLogout, StyledNav, StyledAccount } from './styled';

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
        <StyledLogout onClick={handleLogout}>logout</StyledLogout>
        <Avatar size="large" icon={<UserOutlined />} />
        <StyledAccount>{accountName}</StyledAccount>
      </StyledNav>
    </StyledHeader>
  );
};
