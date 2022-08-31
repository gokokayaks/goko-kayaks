import React, { useContext } from 'react';
import styled from 'styled-components';
import { Section } from '../../../components/section';
import { Text } from '../../../components/text';
import { PricesSectionContext } from '../context/prices';
import { Email, Phone } from '../../../components/contact-item';

const ContactBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const StyledPhone = styled(Phone)`
  margin-right: 10px;
`;

export const ReservationSection = () => {
  const [, setPricesSection] = useContext(PricesSectionContext);

  const handlePriceListLinkClick = () => {
    setPricesSection(true);
  };

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
        <Text type="link" href="#prices" weight="bold" color="white" onClick={handlePriceListLinkClick}>
          <u>price list</u>
        </Text>{' '}
        to see our cancellation policy.
      </Text>

      <ContactBoxContainer>
        <StyledPhone useWords inverted />
        <Email useWords inverted />
      </ContactBoxContainer>
    </Section>
  );
};
