import React, { FunctionComponent, useState } from 'react';

import {
  Segment, Header, Button, Icon
} from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonGroup = styled(Button.Group)`
  display: flex;
  width: 100%;

  &.ui.buttons button.button:first-child {
    border-radius: ${(props) => {
    switch (props.position) {
      case 'top':
        return '0.28571429rem 0em 0em 0em';
      case 'bottom':
        return '0em 0em 0em 0.28571429rem';
      default:
        return '0';
    }
  }};
  }

  &.ui.buttons button.button:last-child {
    border-radius: ${(props) => {
    switch (props.position) {
      case 'top':
        return '0em 0.28571429rem 0em 0em';
      case 'bottom':
        return '0em 0em 0.28571429rem 0em';
      default:
        return '0';
    }
  }};
  }
`;

const IconRotated = styled(Icon)`
  transform: rotate(${(props) => props.rotate});
`;

const PTZControl: FunctionComponent = () => {
  const [cameraSelected] = useState('camera-1');
  return (
    <Segment>
      <Header as="h4" textAlign="center">
        PTZ
      </Header>
      <ButtonGroup position="top">
        <Button icon disabled>
          <IconRotated rotate="-45deg" name="arrow up" />
        </Button>
        <Button icon>
          <Icon name="arrow up" />
        </Button>
        <Button icon disabled>
          <IconRotated rotate="45deg" name="arrow up" />
        </Button>
      </ButtonGroup>
      <ButtonGroup position="center">
        <Button icon>
          <Icon name="arrow left" />
        </Button>
        <Button icon>
          <Icon name="circle" />
        </Button>
        <Button icon>
          <Icon name="arrow right" />
        </Button>
      </ButtonGroup>
      <ButtonGroup position="bottom">
        <Button icon disabled>
          <IconRotated rotate="45deg" name="arrow down" />
        </Button>
        <Button icon>
          <Icon name="arrow down" />
        </Button>
        <Button icon disabled>
          <IconRotated rotate="-45deg" name="arrow down" />
        </Button>
      </ButtonGroup>
    </Segment>
  );
};

export default PTZControl;
