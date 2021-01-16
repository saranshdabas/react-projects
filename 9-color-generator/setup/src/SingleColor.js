import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, hexValue, index }) => {
  console.log(index);
  return (
    <article
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ background: `#${hexValue}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexValue}</p>
    </article>
  );
};

export default SingleColor;
