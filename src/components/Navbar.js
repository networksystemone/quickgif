import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='dt w-100 border-box pa3 ph5-ns bb b--light-gray avenir'>
        <p className='dtc v-mid mid-gray link'>Quick Gif</p>
        <div className='dtc v-mid w-75 tr'>
          <a className='link dim dark-gray f6 f5-ns dib' href='#' title='About'>
            View Source
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
