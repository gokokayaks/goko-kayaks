import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../common/styles/colors';
import { Carousel } from '../../../components/carousel';
import { Text } from '../../../components/text';

import manateeWebp from '../../../images/carousel/manatee.webp';
import manateeJpg from '../../../images/carousel/manatee.jpg';
import mangroveWebp from '../../../images/carousel/mangrove-tunnel-tour.webp';
import mangroveJpg from '../../../images/carousel/mangrove-tunnel-tour.jpg';
import stingrayWebp from '../../../images/carousel/stingray.webp';
import stingrayJpg from '../../../images/carousel/stingray.jpg';
import girlsPartyTourWebp from '../../../images/carousel/girls-party-tour.webp';
import girlsPartyTourJpg from '../../../images/carousel/girls-party-tour.jpg';
import fatherAndSonWebp from '../../../images/carousel/father-and-son.webp';
import fatherAndSonJpg from '../../../images/carousel/father-and-son.jpg';
import comorantOnPostWebp from '../../../images/carousel/comorant-on-post.webp';
import comorantOnPostJpg from '../../../images/carousel/comorant-on-post.jpg';
import clearWaterLaunchWebp from '../../../images/carousel/clear-water-launch.webp';
import clearWaterLaunchJpg from '../../../images/carousel/clear-water-launch.jpg';
import boysRentalWebp from '../../../images/carousel/boys-rental.webp';
import boysRentalJpg from '../../../images/carousel/boys-rental.jpg';

const OpeningTimeText = styled.span`
  color: ${Colors.orange};
  font-weight: 500;
`;

const alignment = { mobile: 'center', desktop: 'left' };

const images: CarouselImages = {
  manatee: {
    webpHref: manateeWebp,
    fallbackHref: manateeJpg,
    alt: 'Manatee',
  },
  mangrove: {
    webpHref: mangroveWebp,
    fallbackHref: mangroveJpg,
    alt: 'Mangrove Tunnel Tour',
  },
  stingray: {
    webpHref: stingrayWebp,
    fallbackHref: stingrayJpg,
    alt: 'Stingray',
  },
  girlsPartyTour: {
    webpHref: girlsPartyTourWebp,
    fallbackHref: girlsPartyTourJpg,
    alt: 'Girls party Tour',
  },
  fatherAndSon: {
    webpHref: fatherAndSonWebp,
    fallbackHref: fatherAndSonJpg,
    alt: 'Father and Son',
  },
  comorantOnPost: {
    webpHref: comorantOnPostWebp,
    fallbackHref: comorantOnPostJpg,
    alt: 'Comorant on post',
  },
  clearWaterLaunch: {
    webpHref: clearWaterLaunchWebp,
    fallbackHref: clearWaterLaunchJpg,
    alt: 'Clear water launch',
  },
  boysRental: {
    webpHref: boysRentalWebp,
    fallbackHref: boysRentalJpg,
    alt: 'Boys rental',
  },
};

export const Welcome = () => {
  return (
    <Carousel images={images}>
      <Text type="heading" color="white" alignment={alignment}>
        Welcome to Goko Kayaks!
      </Text>
      <br />
      <Text type="paragraph" color="white" alignment={alignment}>
        We are Goko, a family of adventurers specializing in kayaking. Collectively, we have been helping others
        adventure the water for 12 years.
      </Text>
      <br />
      <Text type="paragraph" color="white" alignment={alignment}>
        We open six days a week <OpeningTimeText>8am - 6pm!</OpeningTimeText> Closed Thursdays.
      </Text>
      <br />
      <Text type="paragraph" color="white" alignment={alignment}>
        <b>Ready to go? Goko!</b>
      </Text>
    </Carousel>
  );
};
