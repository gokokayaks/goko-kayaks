import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../common/styles/colors';
import { Section } from '../../../components/section';
import { Text } from '../../../components/text';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ContactBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  border: 1px solid ${Colors.white};
  color: ${Colors.white};
  text-decoration: none;

  svg {
    margin-right: 10px;
  }
`;

export const ReservationSection = () => {
  return (
    <Section color="blue">
      <Text type="subHeading" color="white" alignment="center">
        Make Your Adventure Reservations Today!
      </Text>
      <Text type="paragraph" color="white" alignment="center">
        We have a Safety First policy and will reschedule reservations if weather and water conditions are not fit for
        fun.
      </Text>
      <Text type="paragraph" color="white" alignment="center">
        Please view our{' '}
        <Text type="link" href="#prices" weight="bold" color="white">
          price list
        </Text>{' '}
        to see our cancellation policy.
      </Text>

      <ContactBoxContainer>
        <ContactBox href="tel:7273369595">
          <FaPhone />
          Call Us
        </ContactBox>
        <ContactBox href="mailto:gokokayaks@gmail.com">
          <FaEnvelope />
          Email Us
        </ContactBox>
      </ContactBoxContainer>
    </Section>
  );
};
