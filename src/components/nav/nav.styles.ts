import styled from 'styled-components';
import { device } from '../../common/styles/breakpoints';
import { Colors } from '../../common/styles/colors';

export const NavContainer = styled.div`
  height: 130px;
  width: 100%;
`;

interface NavContentsProps {
  isNavFullSize: boolean;
  shouldAnimate: boolean;
}

export const NavContentsWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavContents = styled.nav<NavContentsProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${(props) => (props.isNavFullSize ? '10px' : '5px')};
  width: 100%;
  background: white;
  transition: ${({ shouldAnimate }) => (shouldAnimate ? 'padding 200ms linear' : 'none')};
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
`;

interface ImageProps {
  isNavFullSize: boolean;
  shouldAnimate: boolean;
}

export const Image = styled.img<ImageProps>`
  height: ${(props) => (props.isNavFullSize ? 70 : 50)}px;
  transition: ${({ shouldAnimate }) => (shouldAnimate ? 'height 200ms linear' : 'none')};

  @media only screen and ${device.tablet} {
    height: ${(props) => (props.isNavFullSize ? 110 : 70)}px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and ${device.tablet} {
    justify-content: flex-start;
    width: unset;
  }
`;

interface NavTextProps {
  isNavFullSize: boolean;
  shouldAnimate: boolean;
}

export const NavText = styled.p<NavTextProps>`
  margin: 0;
  padding-left: 10px;
  color: ${Colors.blueDark};
  font-size: ${(props) => (props.isNavFullSize ? 14 : 12)}px;
  line-height: ${(props) => (props.isNavFullSize ? 24 : 18)}px;
  transition: ${({ shouldAnimate }) => (shouldAnimate ? 'font-size 200ms linear, line-height 200ms linear' : 'none')};

  @media only screen and ${device.tablet} {
    font-size: ${(props) => (props.isNavFullSize ? 18 : 14)}px;
  }
`;

export const ContactContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media only screen and ${device.tablet} {
    justify-content: flex-start;
    width: unset;
  }
`;

export const PhoneContainer = styled.li`
  border: 1px solid ${Colors.blueDark};
  padding: 0;
  margin: 0;
`;
export const Phone = styled.a`
  display: flex;
  padding: 5px 15px;
  align-items: center;
  color: ${Colors.blueDark};
  text-decoration: none;
`;

interface IconContainerProps {
  isNavFullSize: boolean;
  withPadding?: boolean;
  shouldAnimate: boolean;
}

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  padding-left: ${({ withPadding = true }) => (withPadding ? 10 : 0)}px;
  font-size: ${({ isNavFullSize }) => (isNavFullSize ? 24 : 18)}px;
  transition: ${({ shouldAnimate }) => (shouldAnimate ? 'font-size 200ms linear' : 'none')};

  a {
    display: flex;
  }
`;

// export const Social = styled(IconContainer).i`

// `;
