import styled from 'styled-components';
import { device } from '../../common/styles/breakpoints';

interface ImageContainerProps {
  visible: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1s linear;
  z-index: 1;

  img {
    height: 100%;

    @media only screen and ${device.tablet} {
      width: 100%;
    }
  }
`;
