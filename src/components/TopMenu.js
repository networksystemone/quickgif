import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class TopMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>QuickGif</Menu.Item>

        <Menu.Item
          name='Home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='Create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
        >
          Create
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'hbout'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='View Source'
          active={activeItem === 'view-source'}
          onClick={this.handleItemClick}
        >
          View Source
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;
