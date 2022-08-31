import React from 'react';
import { SplitSection } from '../../../components/split-section';
import { Text } from '../../../components/text';
import sunsetTourJpeg from '../../../images/sunset-tour.jpeg';
import sunsetTourWebp from '../../../images/sunset-tour.webp';

export const SunsetTourSection = () => (
  <SplitSection
    webpHref={sunsetTourWebp}
    fallbackHref={sunsetTourJpeg}
    alt="sunset tour"
    title="Sunset Tour"
    description={
      <Text type="paragraph">
        Experience one of the most beautiful and calm times of day on the water with us. Watch a warm Florida sunset on
        the ocean, along with the birds and marine life. Includes gear, safety light, brief on-land instruction and{' '}
        <b>free photos</b> taken by your guide during the tour. This experience lasts approximately 1.5 hours.
      </Text>
    }
    reverse
  />
);
