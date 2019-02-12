import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='dt w-100 border-box pa3 ph5-ns bb b--light-gray avenir'>
      <p className='dtc v-mid mid-gray link'>Quick Gif</p>
      <div className='dtc v-mid w-75 tr'>
        <Link className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns' to='/'>
          Home
        </Link>
        <Link
          className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'
          to='/create'
        >
          Create
        </Link>
        <a
          className='link dim dark-gray f6 f5-ns dib'
          href='https://github.com/kalebso/quickgif'
          title='View Source'
        >
          View Source
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
