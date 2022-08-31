import React, { useEffect, useRef, useState } from 'react';
import logoJpg from '../../images/goko-logo.png';
import logoWebp from '../../images/goko-logo.webp';
import {
  NavContainer,
  NavContents,
  Image,
  LogoContainer,
  NavText,
  ContactContainer,
  PhoneContainer,
  Phone,
  IconContainer,
  NavContentsWrapper,
} from './nav.styles';

import { FaPhone, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const options = {
  rootMargin: '0px',
  threshold: 0.7,
};

export const Nav = () => {
  const [isNavFullSize, setNavFullSize] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const containerRef = useRef(null);

  const callback = (entries) => {
    const [entry] = entries;
    setNavFullSize(entry.isIntersecting);

    if (!shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate(true);
      }, 0);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <NavContainer id="nav-bar" ref={containerRef}>
      <NavContentsWrapper>
        <NavContents isNavFullSize={isNavFullSize} shouldAnimate={shouldAnimate}>
          <LogoContainer>
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <source srcSet={logoJpg} type="image/jpeg" />
              <Image src={logoJpg} alt="Goko Kayaks Logo" isNavFullSize={isNavFullSize} shouldAnimate={shouldAnimate} />
            </picture>
            <NavText isNavFullSize={isNavFullSize} shouldAnimate={shouldAnimate}>
              Quality kayak tours, <br /> rentals and more.
            </NavText>
          </LogoContainer>
          <ContactContainer>
            <PhoneContainer>
              <Phone href="tel:7273369595">
                <IconContainer isNavFullSize={isNavFullSize} withPadding={false} shouldAnimate={shouldAnimate}>
                  <FaPhone />
                </IconContainer>
                <NavText isNavFullSize={isNavFullSize} shouldAnimate={shouldAnimate}>
                  (727)-336-9595
                </NavText>
              </Phone>
            </PhoneContainer>
            <PhoneContainer>
              <Phone href="mailto:gokokayaks@gmail.com">
                <IconContainer isNavFullSize={isNavFullSize} withPadding={false} shouldAnimate={shouldAnimate}>
                  <FaEnvelope />
                </IconContainer>
                <NavText isNavFullSize={isNavFullSize} shouldAnimate={shouldAnimate}>
                  Email Us
                </NavText>
              </Phone>
            </PhoneContainer>
            <IconContainer isNavFullSize={isNavFullSize} shouldAnimate={shouldAnimate}>
              <a href="https://www.facebook.com/GokoFL">
                <FaFacebook />
              </a>
            </IconContainer>
            <IconContainer isNavFullSize={isNavFullSize} shouldAnimate={shouldAnimate}>
              <a href="https://www.instagram.com/gokokayaks/">
                <FaInstagram />
              </a>
            </IconContainer>
          </ContactContainer>
        </NavContents>
      </NavContentsWrapper>
    </NavContainer>
  );
};
