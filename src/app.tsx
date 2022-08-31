import React, { FC, Fragment } from 'react';
import * as Styles from './app.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home';
import { NotFoundPage } from './pages/not-found';
export const App: FC = () => {
  return (
    <Fragment>
      <Styles.GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};
