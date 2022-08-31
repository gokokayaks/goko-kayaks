import React from 'react';
import { SplitSection } from '../../../components/split-section';
import { Text } from '../../../components/text';
import rentalJpeg from '../../../images/rentals.jpeg';
import rentalWebp from '../../../images/rentals.webp';

export const RentalsSection = () => (
  <SplitSection
    webpHref={rentalWebp}
    fallbackHref={rentalJpeg}
    alt="rentals"
    title="Rentals"
    description={
      <Text type="paragraph">
        Go on your own adventure with our <b>local delivery service</b> throughout The Tampa Bay area. Head to water
        near you, or to one of our favorite launch points! American-made single kayaks and tandem kayaks available
        daily. All rentals include a personal flotation device (PFD), safety whistle, lightweight paddle and seat back.
        One of our trained guides will also provide you with an on-land paddle brief.
      </Text>
    }
  />
);
