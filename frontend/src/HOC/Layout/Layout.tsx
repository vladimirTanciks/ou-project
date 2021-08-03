import { Layout } from 'antd';

import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import { StyledLayout } from './styled';

const { Content } = Layout;

interface LayoutProps {
  layoutChildren: React.ReactNode;
  sidebarChildren: React.ReactNode;
}

export const LayoutWithSidebar = ({
  layoutChildren,
  sidebarChildren,
}: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />

      <Layout>
        <Sidebar>{sidebarChildren}</Sidebar>
        <Content>{layoutChildren}</Content>
      </Layout>
    </StyledLayout>
  );
};
