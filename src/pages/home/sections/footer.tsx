import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaWix } from 'react-icons/fa';
import { Section } from '../../../components/section';
import { Text } from '../../../components/text';
import { Image } from '../../../components/image';
import { ContactBox, ContactBoxContainer, SocialBox, FooterContents, ImageBox } from './footer.styles';
import britishCanoeingWebp from '../../../images/footer/british-canoeing.webp';
import britishCanoeingJpeg from '../../../images/footer/british-canoeing.jpg';
import kidsSavingOceansWebp from '../../../images/footer/kids-saving-oceans.webp';
import kidsSavingOceansJpeg from '../../../images/footer/kids-saving-oceans.jpg';
import pinellasWebp from '../../../images/footer/pinellas.webp';
import pinellasJpeg from '../../../images/footer/pinellas.jpg';
import prideWebp from '../../../images/footer/pride.webp';
import prideJpeg from '../../../images/footer/pride.jpg';

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Section color="greyMedium">
      <FooterContents>
        <ContactBoxContainer>
          <Text type="subHeading" color="white">
            Contact Us:
          </Text>
          <ContactBox href="tel:7273369595">
            <FaPhone />
            (727)-336-9595
          </ContactBox>
          <ContactBox href="mailto:gokokayaks@gmail.com">
            <FaEnvelope />
            gokokayaks@gmail.com
          </ContactBox>
        </ContactBoxContainer>
        <ImageBox>
          <Image webp={pinellasWebp} fallback={pinellasJpeg} alt="Pinellas County" />
          <Image webp={britishCanoeingWebp} fallback={britishCanoeingJpeg} alt="British Canoeing" />
          <Image webp={prideWebp} fallback={prideJpeg} alt="Pride" />
          <Image webp={kidsSavingOceansWebp} fallback={kidsSavingOceansJpeg} alt="Kids Saving Oceans" />
        </ImageBox>
        <SocialBox>
          <Text type="subHeading" color="white">
            Connect With Goko
          </Text>
          <div>
            <a href="https://www.facebook.com/GokoFL/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/gokokayaks/">
              <FaInstagram />
            </a>
            <a href="https://carolinepaddle.wixsite.com/kayak">
              <FaWix />
            </a>
          </div>
        </SocialBox>
      </FooterContents>
      <Text type="paragraph" color="white" alignment="center">
        Copyright © 2019 - {currentYear} Goko Kayaks LLC. All rights reserved.
      </Text>
    </Section>
  );
};
