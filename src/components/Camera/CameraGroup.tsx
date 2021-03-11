import React, { useState, FunctionComponent } from 'react';
import { Card } from 'semantic-ui-react';

type CameraGroupProps = {
  children: React.ReactNode,
}

const CameraGroup:FunctionComponent<CameraGroupProps> = ({ children }:CameraGroupProps) => {
  const [cameraSelected] = useState(true);

  return (
    <Card.Group>
      {children}
    </Card.Group>
  );
};

export default CameraGroup;
