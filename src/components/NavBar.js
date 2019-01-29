import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar dark>
          <NavbarBrand href='.'>SmoothGIF</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
