import { Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';

import { logout } from '../../redux/features/auth';

import { StyledHeader, StyledLogout, StyledNav } from './styled';
import { Logo } from '../Logo/Logo';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleLogout = (): void => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <Logo />
      <StyledNav>
        <StyledLogout onClick={handleLogout}>logout</StyledLogout>
        <Avatar size="large" icon={<UserOutlined />} />
      </StyledNav>
    </StyledHeader>
  );
};
