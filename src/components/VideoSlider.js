import React from "react";
import { string } from "prop-types";
import Slider, { createSliderWithTooltip } from "rc-slider";

import "rc-slider/assets/index.css";

const SliderWithTooltip = createSliderWithTooltip(Slider);
const style = { width: 600, margin: 50 };

VideoSlider.propTypes = {
  source: string
};

function secondsFormatter(value) {
  return `${value} seconds`;
}

export default function VideoSlider(props) {
  return (
    <div style={style}>
      <SliderWithTooltip
        tipFormatter={secondsFormatter}
        min={props.min}
        max={props.max}
      />
    </div>
  );
}
