import { Sider } from './styled';

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <Sider width={340} breakpoint="sm">
      {children}
    </Sider>
  );
};
