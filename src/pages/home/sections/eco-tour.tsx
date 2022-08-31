import React from 'react';
import { SplitSection } from '../../../components/split-section';
import { Text } from '../../../components/text';
import ecoTourJpeg from '../../../images/eco-tour.jpeg';
import ecoTourWebp from '../../../images/eco-tour.webp';

export const EcoTourSection = () => (
  <SplitSection
    webpHref={ecoTourWebp}
    fallbackHref={ecoTourJpeg}
    alt="Eco Tour"
    title="Eco Tour"
    description={
      <Text type="paragraph">
        The Goko Eco-Tour - in St. Petersburg on Tampa Bay, right off Gandy Beach and into a whole other Florida. Spend
        an exhilarating 2 hours with an experienced guide showing you the wonders of our local waters, mangroves and
        wildlife. Perfect for any level paddler. Includes all gear and a brief on land instruction to familiarize you
        and your crew with vessel and paddle. Your tour guide will take <b>free photos</b> so you can fully enjoy the
        best kayaking in Tampa Bay! No experience needed.
      </Text>
    }
    reverse
  />
);
