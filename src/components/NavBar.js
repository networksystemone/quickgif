import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

import logo from '../toast.svg'

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar dark>
          <NavbarBrand href="/">
            <img
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            SmoothGif
          </NavbarBrand>
        </Navbar>
      </div>
    )
  }
}
