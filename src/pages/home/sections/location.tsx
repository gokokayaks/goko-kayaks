import React from 'react';
import { Text } from '../../../components/text';
import styled from 'styled-components';
import { Colors } from '../../../common/styles/colors';
import { device } from '../../../common/styles/breakpoints';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background-color: ${Colors.orange};
  
  @media only screen and ${device.tablet} {
    padding: 50px 20px;
  }
`;

export const LocationSection = () => {
  return (
    <Section>
      <Text type="subHeading" color="white" margin="0 0 10px 0">
        Location
      </Text>
      <Text type="paragraph" color="white" alignment="center" margin="0 0 10px 0">
        Rentals throughout The Tampa Bay area, Florida.
        <br />
        <b>Local delivery and pick up!</b>
      </Text>
      <Text type="paragraph" color="white" margin="0 0 10px 0">
        Tours offered in St. Petersburg, Florida.
      </Text>
    </Section>
  );
};
