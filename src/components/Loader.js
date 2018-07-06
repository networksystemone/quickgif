import React from 'react'
import { Container, Row } from 'reactstrap'
import { PulseLoader } from 'react-spinners'

class Loader extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <p>Toasting...Please Wait</p>
        </Row>
        <Row className="top-buffer">
          <PulseLoader size={40} color={'#118740'} />
        </Row>
      </Container>
    )
  }
}

export default Loader
