import React, { Component } from 'react'
import FaHeart from 'react-icons/lib/fa/heart'
import FaCode from 'react-icons/lib/fa/code'
import StickyFooter from 'react-sticky-footer'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            padding: '2rem',
            textAlign: 'center'
          }}
          stickyStyles={{
            padding: '2rem'
          }}
        >
          <p className="footer">
            <FaCode size={24} /> with <FaHeart color="red" /> by{' '}
            <a href="http://www.kaleb.io">
              <b>kaleb.io</b>
            </a>
          </p>
        </StickyFooter>
      </div>
    )
  }
}
export default Footer
