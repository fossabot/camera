/* eslint-disable max-len */
import React, { useState, FunctionComponent } from 'react';

import {
  Button, Card, Dimmer, Image
} from 'semantic-ui-react';
import styled from 'styled-components';

import CameraGroup from './CameraGroup';

const CardStyled = styled(Card)`
  flex: 1 1 360px;
  height: fit-content;

  /* Highlight when selected */
  ${(props) => (props.selected ? 'border: 2px solid #79b1e6 !important;' : '')}
  ${(props) => (props.selected ? 'box-shadow: 0 0 10px #79b1e6 !important;' : '')}    
    
  &.ui.card, .ui.cards>.card {
    width: auto;    
  }
`;

type CameraProps = {
  name:string,
  selected?: boolean,
  image: string,
};

type CameraComponents = FunctionComponent<CameraProps> & {
  Group: typeof CameraGroup;
}

const Camera:CameraComponents = ({ name, selected: _selected = false, image }:CameraProps) => {
  const [selected, setSelected] = useState(_selected);
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
    <CardStyled
      onClick={onCameraClick}
      selected={selected}
    >
      <Card.Content extra>{name}</Card.Content>
      <Dimmer.Dimmable
        as={Image}
        onMouseEnter={showDimmer}
        onMouseLeave={hideDimmer}
        dimmed={dimmerActive}
        blurring
      >
        <Dimmer active={dimmerActive}><Button>Ciao</Button></Dimmer>
        <Image src={image} />
      </Dimmer.Dimmable>
      <Card.Content>Ciao</Card.Content>
    </CardStyled>
  );
};

Camera.defaultProps = { selected: false };

Camera.Group = CameraGroup;

export default Camera;
