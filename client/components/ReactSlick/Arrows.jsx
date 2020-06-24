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
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={"material-icons-round"}
      style={{
        ...style,
        position:"absolute",
        left:"77%",
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

