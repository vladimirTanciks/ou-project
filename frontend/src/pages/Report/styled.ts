import styled from 'styled-components/macro';

export const StyledWrapper = styled.div`
  padding: 30px;
`;

export const StyledFlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const StyledFormWrapper = styled.div`
  padding-right: 15px;
  width: 40%;

  @media (max-width: 480px) {
    padding: 0;
    width: 100%;
  }
`;

export const StyledMapWrapper = styled.div`
  padding-left: 15px;
  width: 60%;

  @media (max-width: 480px) {
    padding: 0;
    width: 100%;
  }
`;
