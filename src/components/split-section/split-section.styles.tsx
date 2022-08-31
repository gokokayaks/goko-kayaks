import styled from 'styled-components';
import { device } from '../../common/styles/breakpoints';
import { Colors } from '../../common/styles/colors';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${Colors.greyLight};

  @media only screen and ${device.tablet} {
    flex-wrap: nowrap;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  order: 1;

  @media only screen and ${device.tablet} {
    width: 50%;
    order: unset;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface TextContainerProps {
  isTextVisible: boolean;
  reverse: boolean;
}

const getTransformPosition = (props: TextContainerProps) => {
  if (props.isTextVisible === true || props.isTextVisible === null) return 0;

  return props.reverse ? -100 : 100;
};

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  order: 2;

  @media only screen and ${device.tablet} {
    width: 50%;
    order: unset;
  }
`;

export const TextContents = styled.div<TextContainerProps>`
  padding: 28px;
  box-sizing: border-box;
  opacity: ${(props) => (props.isTextVisible === false ? 0 : 1)};
  transform: translateX(${getTransformPosition}%);
  transition: opacity 500ms linear, transform 250ms linear;

  @media only screen and ${device.tablet} {
    padding: 40px;
  }
`;

export const DescriptionWrapper = styled.div`
  color: ${Colors.greyDark};
  font-weight: 100;
  line-height: 25px;
  margin: 0;
`;
