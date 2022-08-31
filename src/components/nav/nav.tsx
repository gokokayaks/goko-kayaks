import React from 'react';
import {
  NavSpacer,
  NavContainer,
  GokoLogo,
  IconContainer,
  ClickableItems,
  LogoWrapper,
  StyledPhone,
} from './nav.styles';
import logoJpg from '../../images/goko-logo.png';
import logoWebp from '../../images/goko-logo.webp';
import { Email } from '../contact-item';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Text } from '../text';

export const Nav = () => {
  return (
    <NavSpacer>
      <NavContainer>
        <LogoWrapper>
          <GokoLogo webp={logoWebp} fallback={logoJpg} alt="Goko Kayaks" />
          <Text type="paragraph" color="blueDark">
            Quality kayak tours,
            <br />
            rentals and more.
          </Text>
        </LogoWrapper>
        <ClickableItems>
          <StyledPhone />
          <Email useWords />

          <IconContainer>
            <a href="https://www.facebook.com/GokoFL">
              <FaFacebook />
            </a>
          </IconContainer>
          <IconContainer>
            <a href="https://www.instagram.com/gokokayaks/">
              <FaInstagram />
            </a>
          </IconContainer>
        </ClickableItems>
      </NavContainer>
    </NavSpacer>
  );
};
