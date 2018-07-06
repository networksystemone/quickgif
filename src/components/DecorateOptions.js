import React, { Component } from 'react'
import { TwitterPicker } from 'react-color'
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'

import './DecorateOptions.css'

class DecorateOptions extends Component {
  state = {
    text: '',
    font: 'sans-serif',
    fontWeight: 'normal',
    fontSize: '16px',
    fontColor: '#ffffff'
  }

  handleTextChange = e => {
    this.setState({ text: e.target.value })
  }

  handleFontChange = e => {
    this.setState({ font: e.target.value })
  }

  handleWeightChange = e => {
    e.preventDefault()
    this.setState({ fontWeight: e.currentTarget.value })
  }

  handleSizeChange = e => {
    let fontSize = e.target.value + 'px'
    this.setState({ fontSize })
  }
  handleColorChange = color => {
    this.setState({ fontColor: color.hex })
  }

  handleCreateButton = () => {
    let options = {
      text: this.state.text,
      font: this.state.font,
      fontWeight: this.state.fontWeight,
      fontSize: this.state.fontSize,
      fontColor: this.state.fontColor
    }

    this.props.createOptions(options)
  }

  handlePreviewButton = () => {
    let options = {
      text: this.state.text,
      font: this.state.font,
      fontWeight: this.state.fontWeight,
      fontSize: this.state.fontSize,
      fontColor: this.state.fontColor
    }

    this.props.previewOptions(options)
  }

  render() {
    return (
      <Container className="buffer">
        <Row className="justify-content-center">
          <Col xs="12" sm="8" md="6" lg="4">
            <Form>
              <FormGroup>
                <Label for="textInput">Text</Label>
                <Input
                  type="text"
                  value={this.state.text}
                  onChange={this.handleTextChange}
                  name="text"
                  id="textInput"
                />
              </FormGroup>

              <FormGroup>
                <Label for="fontSelect">Font</Label>
                <Input
                  type="select"
                  name="fontSelect"
                  id="fontSelect"
                  onChange={this.handleFontChange}
                  defaultValue={this.state.font}
                >
                  <option value="sans-serif">sans-serif</option>
                  <option value="Arial">Arial</option>
                  <option value="Calibri">Calibri</option>
                  <option value="Times New Roman">Times New Roman</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Button
                        value="normal"
                        className="btn-space"
                        color="secondary"
                        onClick={this.handleWeightChange}
                      >
                        normal
                      </Button>
                      <Button
                        value="bold"
                        color="secondary"
                        onClick={this.handleWeightChange}
                      >
                        <b>bold</b>
                      </Button>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="text-align"
                    maxLength="3"
                    placeholder="16"
                    onChange={this.handleSizeChange}
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>px</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="colorPicker">Text Color</Label>
                <TwitterPicker
                  onChange={this.handleColorChange}
                  align="center"
                  id="colorPicker"
                  triangle="hide"
                  width="250"
                />
              </FormGroup>
              <FormGroup>
                <Button
                  onClick={this.handlePreviewButton}
                  color="primary"
                  size="lg"
                  block
                >
                  Preview
                </Button>
                <Button
                  onClick={this.handleCreateButton}
                  color="success"
                  size="lg"
                  block
                >
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
