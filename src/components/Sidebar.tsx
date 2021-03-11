import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components';

import CameraControl from './CameraControl/CameraControl';
import Navigation from './Navigation';

const Aside = styled.div`
`;

const Sidebar:FunctionComponent = () => {
  const [cameraSelected] = useState(true);

  return (
    <Aside>
      <Navigation />
      {cameraSelected ? <CameraControl camera="Camera 1" /> : null}
    </Aside>
  );
};

export default Sidebar;
