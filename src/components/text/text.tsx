import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { device } from '../../common/styles/breakpoints';
import { Colors } from '../../common/styles/colors';

type ElementTypes = 'p' | 'h1' | 'h2' | 'a';

type ThemeProperties = {
  element: ElementTypes;
  color?: string;
  cursor?: 'none' | 'pointer';
  mobileSize?: string;
  desktopSize?: string;
  weight?: number;
};

type Alignment = string | { mobile: string; desktop: string };
type Margin = string | { mobile: string; desktop: string };

const theme = {
  paragraph: { element: 'p' },
  heading: { element: 'h1', desktopSize: '50px', mobileSize: '30px', weight: 100 },
  subHeading: { element: 'h2', desktopSize: '35px', mobileSize: '28px', weight: 100 },
  link: { element: 'a', color: Colors.blue, cursor: 'pointer' },
} as const;

const getTheme = (themeKey: keyof ThemeProperties) => (props) => {
  return props?.theme?.[themeKey] ?? '';
};

const getAlignment = (device: 'desktop' | 'mobile') => (props: { alignment: Alignment }) => {
  const defaultAlignment = 'left';

  if (typeof props.alignment === 'string') {
    return props.alignment || defaultAlignment;
  }

  if (device === 'desktop') {
    return props.alignment?.desktop ?? defaultAlignment;
  }

  if (device === 'mobile') {
    return props.alignment?.mobile ?? defaultAlignment;
  }

  return defaultAlignment;
};

const getMargin = (device: 'desktop' | 'mobile') => (props) => {
  const margin: Margin = props.margin;
  const defaultAlignment = '0';

  if (typeof margin === 'string') {
    return margin || defaultAlignment;
  }

  if (device === 'desktop') {
    return margin?.desktop ?? defaultAlignment;
  }

  if (device === 'mobile') {
    return margin?.mobile ?? defaultAlignment;
  }

  return defaultAlignment;
};

const getWeight = (props) => {
  if (props?.weight) {
    const weightMap = {
      bold: 900,
      normal: 500,
      light: 100,
    };

    const weight = weightMap?.[props?.weight];
    return weight || weightMap.normal;
  }

  return getTheme('weight')(props);
};

interface TextProps {
  type: keyof typeof theme;
  href?: string;
  color?: keyof typeof Colors;
  alignment?: Alignment;
  margin?: Margin;
  weight?: 'bold' | 'normal' | 'light';
  onClick?: () => void;
}

const StyledText = styled.p<Pick<TextProps, 'alignment' | 'margin' | 'weight'>>`
  margin: ${getMargin('mobile')};
  color: ${(props) => props.color};
  cursor: ${getTheme('cursor')};
  text-decoration: none;
  font-size: ${getTheme('mobileSize')};
  font-weight: ${getWeight};
  text-align: ${getAlignment('mobile')};

  @media only screen and ${device.tablet} {
    margin: ${getMargin('desktop')};
    font-size: ${getTheme('desktopSize')};
    text-align: ${getAlignment('desktop')};
  }
`;

export const Text: FC<PropsWithChildren<TextProps>> = ({
  type,
  color,
  children,
  href,
  alignment,
  margin,
  weight,
  onClick,
}) => {
  const textTheme: ThemeProperties = theme?.[type] ?? theme.paragraph;
  const textColor = (color || textTheme?.color) ?? Colors.black;

  return (
    <StyledText
      as={textTheme.element}
      theme={textTheme}
      color={textColor}
      href={href}
      alignment={alignment}
      margin={margin}
      weight={weight}
      onClick={onClick}
    >
      {children}
    </StyledText>
  );
};
