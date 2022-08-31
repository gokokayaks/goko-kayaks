import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Colors } from '../../common/styles/colors';

interface SectionProps {
  color?: keyof typeof Colors;
  alignment?: string;
}

const StyledSection = styled.section<SectionProps>`
  padding: 40px 20px;
  background-color: ${(props) => Colors[props?.color ?? 'white']};
  text-align: ${(props) => props.alignment ?? 'auto'};
`;

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, color, alignment }) => {
  return (
    <StyledSection color={color} alignment={alignment}>
      {children}
    </StyledSection>
  );
};
