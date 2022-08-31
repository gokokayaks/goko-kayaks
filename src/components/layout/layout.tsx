import React, { FC, PropsWithChildren } from 'react';
import { Nav } from '../nav';
import { LayoutContainer, ChildrenContainer } from './layout.styles';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Nav />
      <ChildrenContainer>{children}</ChildrenContainer>
    </LayoutContainer>
  );
};
