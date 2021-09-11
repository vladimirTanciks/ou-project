import styled from 'styled-components/macro';
import { Card, Button } from 'antd';

export const StyledSignInCard = styled(Card)`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 200px;
`;

export const StyledFormButton = styled(Button)`
  margin-top: 14px;
  width: 100%;
`;

export const StyledErrorMessage = styled.div`
  width: 100%;
  color: red;
  text-align: center;
`;

export const StyledLogin = styled(Button)`
  text-align: center;
`;
