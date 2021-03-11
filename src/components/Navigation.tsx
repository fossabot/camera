import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Menu, Icon, Label
} from 'semantic-ui-react';

const Navigation = () => (
  <Menu vertical pointing>
    <NavLink className="item" to="/" activeClassName="active" exact>
      <Icon name="video play" />
      Dashboard
    </NavLink>
    <NavLink className="item" to="/cameras" activeClassName="active" exact>
      <Icon.Group className="icon">
        <Icon name="video camera" />
        <Icon name="setting" corner="bottom left" />
      </Icon.Group>
      <Label>7</Label>
      Cameras
    </NavLink>
    <NavLink className="item" to="/settings" activeClassName="active" exact>
      <Icon name="setting" />
      Settings
    </NavLink>
  </Menu>
);

export default Navigation;
