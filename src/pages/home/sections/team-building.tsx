import React from 'react';
import { SplitSection } from '../../../components/split-section';
import { Text } from '../../../components/text';
import teamBuildingJpeg from '../../../images/parties-team-building.jpeg';
import teamBuildingWebp from '../../../images/parties-team-building.webp';

export const TeamBuildingSection = () => (
  <SplitSection
    webpHref={teamBuildingWebp}
    fallbackHref={teamBuildingJpeg}
    alt="team building"
    title="Team Building, Parties & Educational Paddles"
    description={
      <ul>
        <li>
          <Text type="paragraph">
            Goko-led <b>team building sessions</b> for all ages will push your trust and team work skills in fun and wet
            ways. We have drawn from our own professional team building experiences and paddlesport team building
            throughout the U.S and in Manchester- England, to bring a fun way to strengthen your team.
          </Text>
        </li>

        <li>
          <Text type="paragraph">
            <b>Ready to celebrate?</b> Bring your party to us and a guide will show you around and show you a good time.
            Whether it is a birthday, girls day out, or bachelor party -- you name it and we will help you enjoy it.
            Special pricing available.
          </Text>
        </li>

        <li>
          <Text type="paragraph">
            <b>Educational paddles</b> focus on ecology, the life we see and the impact it has on the things around it.
            We will quench your classrooms, scout groups or family’s thirst for knowledge.
          </Text>
        </li>
      </ul>
    }
    reverse
  />
);
