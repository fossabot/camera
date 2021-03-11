import React, { FunctionComponent, useState } from 'react';

import {
  Segment, Header, Button, Icon
} from 'semantic-ui-react';

const MediaControl:FunctionComponent = () => {
  const [cameraSelected] = useState('camera-1');
  return (
    <Segment>
      <Header as="h4" textAlign="center">Media</Header>
      <Button.Group vertical>
        <Button icon labelPosition="left">
          <Icon name="circle" color="red" />
          Record
        </Button>
        <Button icon labelPosition="left">
          <Icon name="camera retro" />
          Take a picture
        </Button>
      </Button.Group>
    </Segment>
  );
};

export default MediaControl;
