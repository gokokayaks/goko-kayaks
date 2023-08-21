import React from 'react';
import { Section } from '../../../components/section';
import { Text } from '../../../components/text';
import { Image } from '../../../components/image';
import bestOfTheBestWebp2022 from '../../../images/best-of-the-best-2022.webp';
import bestOfTheBestPng2022 from '../../../images/best-of-the-best-2022.png';
import bestOfTheBestWebp2023 from '../../../images/best-of-the-best-2023.webp';
import bestOfTheBestPng2023 from '../../../images/best-of-the-best-2023.png';
import styled from 'styled-components';
import { device } from '../../../common/styles/breakpoints';

const ImageWrapper = styled(Image)`
  width: 120px;

  @media only screen and ${device.tablet} {
    width: 200px;
  }
`;

export const AwardSection = () => {
  return (
    <Section color="blue" alignment="center">
      <ImageWrapper webp={bestOfTheBestWebp2022} fallback={bestOfTheBestPng2022} alt="Best of the best award winners 2022" />
      <ImageWrapper webp={bestOfTheBestWebp2023} fallback={bestOfTheBestPng2023} alt="Best of the best award winners 2023" />
      <Text type="subHeading" color="white" alignment="center">
        Peoples Choice 2022 and 2023 Gold Winners
      </Text>
      <Text type="paragraph" color="white" alignment="center">
        Voted Best Kayak Rental Company in Tampa Bay
      </Text>
    </Section>
  );
};
