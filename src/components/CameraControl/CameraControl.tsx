import React, { FunctionComponent, useState } from 'react';

import { Segment, Header } from 'semantic-ui-react';
import MediaControl from './MediaControl';
import PTZControl from './PTZControl';

type CameraControlProps = {
  camera: string;
};

const CameraControl: FunctionComponent<CameraControlProps> = ({
  camera,
}: CameraControlProps) => {
  const [cameras] = useState(camera);

  return (
    <Segment stacked>
      <Header as="h3" textAlign="center">
        {camera}
      </Header>
      <PTZControl />
      <MediaControl />
    </Segment>
  );
};

export default CameraControl;
