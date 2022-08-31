import React from 'react';
import { SplitSection } from '../../../components/split-section';
import { Text } from '../../../components/text';
import waterJpeg from '../../../images/water-meditation.jpeg';
import waterWebp from '../../../images/water-meditation.webp';

export const WaterMeditationSection = () => (
  <SplitSection
    webpHref={waterWebp}
    fallbackHref={waterJpeg}
    alt="on the water meditation"
    title="On The Water Meditation (OWM)™"
    description={
      <Text type="paragraph">
        Paddle into nature, enjoy a guided meditation and find your peace. OWM is a unique way to find balance while
        living a big city life. The Tampa Bay area has over 3 million people hustling and bustling and traffic jamming,
        which can camouflage the inspiring and wonder of the back yard we all share! Let us take a minute to stop, smell
        the ocean, and practice mindfulness whilst floating on top of it.
      </Text>
    }
  />
);
