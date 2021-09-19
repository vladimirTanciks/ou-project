import { Layout as AntLayout } from 'antd';

import { useSelector } from 'react-redux';

import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Notificator } from '../../components/Notificator/Notificator';

import { StyledLayout } from './styled';
import { RootState } from '../../redux/store';

const { Content } = AntLayout;

interface LayoutProps {
  layoutChildren: React.ReactNode;
  sidebarChildren?: React.ReactNode;
}

export const Layout = ({
  layoutChildren,
  sidebarChildren,
}: LayoutProps): JSX.Element => {
  const reports = useSelector((state: RootState) => state.reports.data);

  return (
    <StyledLayout>
      <Header />

      <Notificator />

      <AntLayout>
        {reports && reports.length > 0 && sidebarChildren && (
          <Sidebar>{sidebarChildren}</Sidebar>
        )}
        <Content>{layoutChildren}</Content>
      </AntLayout>
    </StyledLayout>
  );
};
