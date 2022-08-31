import styled from 'styled-components';
import { device } from '../../../common/styles/breakpoints';
import { Colors } from '../../../common/styles/colors';
import { Phone } from '../../../components/contact-item';
export const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and ${device.tablet} {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ContactBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.tablet} {
    width: 33%;
  }
`;

export const StyledPhone = styled(Phone)`
  margin-bottom: 10px;
`;

export const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.tablet} {
    width: 33%;
  }

  a {
    font-size: 50px;
    margin-right: 15px;
  }
`;

export const ImageBox = styled.div`
  display: inline-block;
  text-align: center;

  @media only screen and ${device.tablet} {
    width: 33%;
  }

  img {
    display: inline-block;
    max-width: 25%;
    padding: 5px;
    box-sizing: border-box;

    @media only screen and ${device.tablet} {
      width: 33%;
    }
  }
`;
