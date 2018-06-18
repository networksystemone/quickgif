import React from "react";
import { string } from "prop-types";
import ReactPlayer from "react-player";

VideoPreview.propTypes = {
  source: string
};

export default function VideoPreview(props) {
  return (
    <div>
      <ReactPlayer url={props.source} playing muted />
    </div>
  );
}
