/* eslint-disable */

import React, { Component } from 'react';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:"relative", left:"900px", top:"30px", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:"relative", left:"682px", top:"562px", background: "red", zIndex:"1"}}
      onClick={onClick}
    />
  );
}

export { SampleNextArrow, SamplePrevArrow };

