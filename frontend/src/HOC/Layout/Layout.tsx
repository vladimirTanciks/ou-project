import { Layout as AntLayout } from 'antd';

import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Notificator } from '../../components/Notificator/Notificator';

import { StyledLayout } from './styled';

const { Content } = AntLayout;

interface LayoutProps {
  layoutChildren: React.ReactNode;
  sidebarChildren?: React.ReactNode;
}

export const Layout = ({
  layoutChildren,
  sidebarChildren,
}: LayoutProps): JSX.Element => {
  return (
    <StyledLayout>
      <Header />

      <Notificator />

      <AntLayout>
        {sidebarChildren && <Sidebar>{sidebarChildren}</Sidebar>}
        <Content>{layoutChildren}</Content>
      </AntLayout>
    </StyledLayout>
  );
};
