import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, hexValue, index }) => {
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={handleClick}
      className={`color ${index > 10 ? "color-light" : null}`}
      style={{ background: `#${hexValue}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
