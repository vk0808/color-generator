import React, { useState, useEffect } from "react";
import "./styles.css";

const SingleColor = ({ rgb, weight, index, hexColor, length }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  // console.log("length:", length);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > length && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={async () => {
        try {
          setAlert(true);
          await navigator.clipboard.writeText(hexValue);
        } catch (err) {
          console.log(err);
        }
      }}
    >
      <p className="percent-value"> {weight}% </p>
      <p className="color-value"> {hexValue} </p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
