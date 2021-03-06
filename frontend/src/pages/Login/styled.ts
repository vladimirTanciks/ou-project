import styled from 'styled-components/macro';
import { Card, Button } from 'antd';

export const StyledSignInCard = styled(Card)`
  width: 500px;
  margin: 0 auto;
  margin-top: 30px;
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

export const StyledRegister = styled(Button)`
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
`;
