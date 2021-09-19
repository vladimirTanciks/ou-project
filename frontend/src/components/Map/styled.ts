import styled from 'styled-components/macro';

import marker from '../../images/center-marker.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

export const DumpImage = styled.img`
  width: 70px;
  height: 70px;
  border: 4px solid white;
  border-radius: 7px;
`;

export const StyledCenterMarker = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${marker});
  background-size: cover;
`;
