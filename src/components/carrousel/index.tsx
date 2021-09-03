/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import Helmet from 'react-helmet';

import { SlickSlider } from './carousel.styles';
import settings from './carrousel.settings';

const Carrousel: FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </>
  );
};
export default Carrousel;
