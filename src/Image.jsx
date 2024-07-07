import React from "react";
import missingPic from "./img/imageavailable.png"

function Image(props) {
  const theImage = props.characters && props.characters[props.index].pictures[0]
    ? props.characters[props.index].pictures[0].url
    : missingPic
}

export default Image