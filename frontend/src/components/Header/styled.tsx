import styled from 'styled-components/macro';
import { Layout } from 'antd';

export const StyledHeader = styled(Layout.Header)`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  background: #ffffff;
`;

export const StyledNav = styled.div`
  float: right;
`;
export const StyledLogout = styled.span`
  margin-right: 20px;
  cursor: pointer;
`;

export const StyledAccount = styled.span`
  margin-left: 15px;
`;
