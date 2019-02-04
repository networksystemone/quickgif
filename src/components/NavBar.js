import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class NavBar extends React.Component {
  render() {
    return (
      <Header className='header'>
        <Logo />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>Create</Menu.Item>
          <Menu.Item key='2'>About</Menu.Item>
          <Menu.Item key='3'>View Source</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

export default NavBar;
