import styled from 'styled-components';
import { device } from '../../common/styles/breakpoints';
import { Colors } from '../../common/styles/colors';
import { Phone } from '../contact-item';
import { Image } from '../image';

const heightDesktop = 150;
const heightMobile = 140;

export const NavSpacer = styled.div`
  height: ${heightMobile}px;

  @media only screen and ${device.tablet} {
    height: ${heightDesktop}px;
  }
`;

export const NavContainer = styled.nav`
  position: fixed;
  height: ${heightMobile}px;
  width: 100%;
  max-width: 1200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;

  background-color: ${Colors.white};
  z-index: 9999;

  @media only screen and ${device.tablet} {
    justify-content: space-between;
    flex-wrap: nowrap;

    height: ${heightDesktop}px;
    padding: 20px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    align-self: center;
  }

  @media only screen and ${device.tablet} {
    justify-content: flex-start;
    width: initial;
  }
`;

export const GokoLogo = styled(Image)`
  height: ${heightMobile * 0.5}px;
  margin: 0 auto;
  margin-right: 10px;

  @media only screen and ${device.tablet} {
    height: ${heightDesktop * 0.7}px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  padding-left: 10px;
  font-size: 28px;

  a {
    display: flex;
  }
`;

export const ClickableItems = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPhone = styled(Phone)`
  margin-right: 10px;
`;
