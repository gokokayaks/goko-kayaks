import styled from 'styled-components';
import { device } from '../../common/styles/breakpoints';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  aspect-ratio: 4/3;

  @media only screen and ${device.tablet} {
    aspect-ratio: 16/9;
    min-height: 300px;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  width: 90%;
  padding: 0 0 20px;

  @media only screen and ${device.tablet} {
    width: 50%;
    align-items: flex-start;
    padding: 0 20px 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));

  @media only screen and ${device.tablet} {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
  }
`;
