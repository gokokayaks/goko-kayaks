import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { SplitSection } from '../../../components/split-section';
import { Text } from '../../../components/text';
import instructionJpeg from '../../../images/instruction.jpeg';
import instructionWebp from '../../../images/instruction.webp';

export const InstructionSection = () => (
  <SplitSection
    webpHref={instructionWebp}
    fallbackHref={instructionJpeg}
    alt="instruction"
    title="Instruction"
    description={
      <div>
        <ul>
          <li>
            <Text type="paragraph">
              We have a serious side too. Nature, peace and fun are our middle names, but so is safety.
            </Text>
          </li>

          <li>
            <Text type="paragraph">
              Our <b>introduction to paddling class</b> is based on the 12 years of on-the-water realities faced by our
              chief guide. It aims to get anyone comfortable and in control of a kayak, and familiar with the proper
              gear that accompanies one. We explore launch safety, comfort and balance on/in craft, basic strokes and
              craft control. Serious, yes, and enjoyable too!
            </Text>
          </li>

          <li>
            <Text type="paragraph">
              We have created an <b>introduction to safety class</b> using both American Canoe Association and British
              Canoe life-saving techniques. Safety equipment is explained and rescues are practiced including land and
              water, solo and team.
            </Text>
          </li>
        </ul>
        <div>
          <Text type="paragraph">
            <b>Contact us for more information</b>
          </Text>
          <Text type="link" href="tel:7273369595">
            <FaPhone />
            (727)-336-9595
          </Text>
        </div>
      </div>
    }
  />
);
