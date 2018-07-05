import React, { Component } from 'react'
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'

import { TwitterPicker } from 'react-color'

import './DecorateOptions.css'

class DecorateOptions extends Component {
  render() {
    return (
      <Container className="buffer">
        <Row className="justify-content-center">
          <Col xs="12" sm="8" md="6" lg="4">
            <Form>
              <FormGroup>
                <Label for="textInput">Text</Label>
                <Input type="text" name="text" id="textInput" />
              </FormGroup>
              <FormGroup>
                <Label for="fontSelect">Font</Label>
                <Input type="select" name="fontSelect" id="fontSelect">
                  <option>Sans-Serif</option>
                  <option>Arial</option>
                  <option>Calibri</option>
                  <option>Times New Roman</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Button className="btn-space" color="secondary">
                        Normal
                      </Button>{' '}
                      <Button color="secondary">
                        <b>Bold</b>
                      </Button>{' '}
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input maxLength="3" placeholder="Font Size" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>px</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="colorPicker">Text Color</Label>
                <TwitterPicker
                  align="center"
                  id="colorPicker"
                  triangle="hide"
                  width="250"
                />
              </FormGroup>
              <FormGroup>
                <Button color="primary" size="lg" block>
                  Preview
                </Button>
                <Button color="success" size="lg" block>
                  Create GIF
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default DecorateOptions
