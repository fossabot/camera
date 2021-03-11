/* eslint-disable max-len */
// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { useState } from 'react';

import {
  Menu, Icon, Label, MenuItemProps
} from 'semantic-ui-react';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (_event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: MenuItemProps) => {
    setActiveItem(data.name || 'null');
  };

  return (
    <Menu vertical pointing>
      <Menu.Item
        name="dashboard"
        active={activeItem === 'dashboard'}
        onClick={handleItemClick}
      >
        <Icon name="video play" />
        Dashboard
      </Menu.Item>

      <Menu.Item
        name="cameras"
        active={activeItem === 'cameras'}
        onClick={handleItemClick}
      >
        <Icon.Group className="icon">
          <Icon name="video camera" />
          <Icon name="setting" corner="bottom left" />
        </Icon.Group>
        <Label>7</Label>
        Cameras
      </Menu.Item>

      <Menu.Item
        name="updates"
        active={activeItem === 'updates'}
        onClick={handleItemClick}
      >
        <Icon name="setting" />
        Setting
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
