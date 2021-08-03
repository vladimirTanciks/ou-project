
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { StyledHeader } from './styled';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return <StyledHeader>
    <Logo />
    <Avatar size="large" icon={<UserOutlined />} />
  </StyledHeader>
}

