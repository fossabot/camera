/* eslint-disable max-len */
import React, { useState, FunctionComponent } from 'react';

import {
  Button, Card, Dimmer, Icon, Image
} from 'semantic-ui-react';
import styled, { keyframes } from 'styled-components';

import CameraGroup from './CameraGroup';

const CameraContainer = styled(Card)`
  flex: 1 1 360px;
  height: fit-content;

  /* Highlight when selected */
  ${(props) => (props.selected ? 'border: 2px solid #79b1e6 !important;' : '')}
  ${(props) => (props.selected ? 'box-shadow: 0 0 10px #79b1e6 !important;' : '')}    
    
  &.ui.card, .ui.cards>.card {
    width: auto;    
  }
`;

const CameraHeader = styled(Card.Content)`
  .ui.card>&.extra{
    color: black; 
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .ui.card>&.extra span{
    font-size: 0.8rem;
    font-weight: normal;
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const RecIcon = styled(Icon)`
  animation: ${pulse} 2s ease-in-out infinite;
`;

type CameraProps = {
  name:string,
  selected?: boolean,
  isRecording?: boolean,
  image: string,
};

type CameraComponents = FunctionComponent<CameraProps> & {
  Group: typeof CameraGroup;
}

const Camera:CameraComponents = ({
  name, selected: _selected, isRecording: _isRecording, image
}:CameraProps) => {
  const [selected, setSelected] = useState(_selected);
  const [isRecording, setIsRecording] = useState(_isRecording);
  const [dimmerActive, setDimmerActive] = useState(false);

  const onCameraClick = () => {
    setSelected(!selected);
  };

  const hideDimmer = () => {
    setDimmerActive(false);
  };

  const showDimmer = () => {
    setDimmerActive(true);
  };

  return (
    <CameraContainer
      // onClick={onCameraClick}
      selected={selected}
    >
      <CameraHeader
        extra
        onClick={onCameraClick}
        onMouseEnter={() => {
          console.log('hover');
        }}
      >
        {isRecording ? <RecIcon name="circle" color="red" size="small" /> : null}
        {name}
      </CameraHeader>
      <Dimmer.Dimmable
        as={Image}
        onMouseEnter={showDimmer}
        onMouseLeave={hideDimmer}
        dimmed={dimmerActive}
      >
        <Dimmer active={dimmerActive}>
          <Button.Group vertical>
            {!isRecording
              ? (
                <Button icon labelPosition="left">
                  <Icon name="circle" color="red" />
                  Record
                </Button>
              ) : (
                <Button icon labelPosition="left">
                  <Icon name="square" color="red" />
                  Stop record
                </Button>
              )}
            <Button icon labelPosition="left">
              <Icon name="camera retro" />
              Take a picture
            </Button>
          </Button.Group>
        </Dimmer>
        <Image src={image} />
      </Dimmer.Dimmable>
      <Card.Content extra>
        <Button basic icon labelPosition="right">
          Fullscreen
          <Icon name="expand" />
        </Button>
      </Card.Content>
    </CameraContainer>

  );
};

Camera.defaultProps = { selected: false, isRecording: false };

Camera.Group = CameraGroup;

export default Camera;
