import React from 'react';

import Carousel from './carousel';
import Countdown from './countdown';

const Featured = () => (
  <div style={{ position: 'relative' }}>
    <Carousel />
    <div className="artist_name">
      <div className="wrapper">Artist</div>
    </div>
    <Countdown />
  </div>
);

export default Featured;
