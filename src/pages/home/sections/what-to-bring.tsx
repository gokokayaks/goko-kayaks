import React from 'react';
import styled from 'styled-components';
import { device } from '../../../common/styles/breakpoints';
import { Section } from '../../../components/section';
import { Text } from '../../../components/text';

const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and ${device.tablet} {
    flex-wrap: no-wrap;
  }
`;

const SubSection = styled.div`
  width: 100%;

  @media only screen and ${device.tablet} {
    width: 50%;
  }

  ul {
    margin: 10px 0 0;
  }
`;

export const WhatToBringSection = () => {
  return (
    <Section color="greyLight">
      <SectionContent>
        <SubSection>
          <Text type="subHeading" alignment="center">
            What To Bring On Your Adventure
          </Text>
          <ul>
            <li>Water (please bring reusable drinking bottle or recycle after)</li>
            <li>Sun Protection (sun lotion, sun glasses, hat etc)</li>
            <li>Clothes and shoes that are able to get wet</li>
            <li>Towel for after</li>
            <li>Bug Spray (Optional)</li>
          </ul>
        </SubSection>

        <SubSection>
          <Text type="subHeading" alignment="center">
            What Not To Bring
          </Text>
          <ul>
            <li>
              <i>Anything</i> you don't want to lose or get wet. (waterproof pouches for sale prior to launch)
            </li>
          </ul>
        </SubSection>
      </SectionContent>
    </Section>
  );
};
