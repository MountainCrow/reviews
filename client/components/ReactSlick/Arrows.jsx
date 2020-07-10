/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';

const Arrow = styled.i`
  color: firebrick;
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={"material-icons-round"}
      style={{ ...style, position:"absolute", left:"95%", top:"104%", width:"auto", zIndex:"1"}}
      onClick={onClick}
    >
    navigate_next
    </Arrow>
  );
}

function SamplePrevArrow(props) {
  // need to make sure that these move as the list gets bigger
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={"material-icons-round"}
      style={{
        ...style,
        position:"absolute",
        left:"20%",
        // left: 77%, see if I can get this to dynamically move
        top:"104%",
        width: "auto",
        zIndex:"1"
        }}
      onClick={onClick}
    >
    navigate_before
    </Arrow>
  );
}

export { SampleNextArrow, SamplePrevArrow };

