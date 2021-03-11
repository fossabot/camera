// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import Camera from '../components/Camera/Camera';

import camera1Img from '../img/latest.jpg';
import camera2Img from '../img/latest_ciao.jpg';

const Dashboard = () => (
  <>
    <Camera.Group>
      <Camera name="Camera" image={camera1Img} />
      <Camera name="Camera" image={camera2Img} />
      <Camera name="Camera" image={camera1Img} />
    </Camera.Group>
  </>
);

export default Dashboard;
