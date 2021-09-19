import { ReportForm } from '../../components/ReportForm/ReportForm';
import { Map } from '../../components/Map/Map';

import {
  StyledFormWrapper,
  StyledMapWrapper,
  StyledHeading,
  StyledFlexContainer,
  StyledWrapper,
} from './styled';

export const Report = (): JSX.Element => {
  return (
    <StyledWrapper>
      <StyledFlexContainer>
        <StyledFormWrapper>
          <StyledHeading>Add new report</StyledHeading>
          <ReportForm />
        </StyledFormWrapper>
        <StyledMapWrapper>
          <Map newReport />
        </StyledMapWrapper>
      </StyledFlexContainer>
    </StyledWrapper>
  );
};
