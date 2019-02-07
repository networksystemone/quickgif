import React from 'react';

class Navbar extends React.Component {
  onDrop = file => {
    this.props.file(file[0].preview);
  };

  render() {
    return (
      <nav className='dt w-100 border-box pa3 ph5-ns bb b--light-gray'>
        <a className='dtc v-mid mid-gray link dim w-25' href='#' title='Home'>
          <img
            src='http://tachyons.io/img/logo.jpg'
            className='dib w2 h2 br-100'
            alt='Site Name'
          />
        </a>
        <div className='dtc v-mid w-75 tr'>
          <a
            className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'
            href='#'
            title='Home'
          >
            Home
          </a>
          <a
            className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'
            href='#'
            title='Create'
          >
            Make a Gif
          </a>
          <a className='link dim dark-gray f6 f5-ns dib' href='#' title='About'>
            About
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
