import React, { useState, useEffect } from 'react';

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  return (
    <article className={`color`} style={{backgroundColor: `rgb(${bcg})`}}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
    </article>
  );
}

export default SingleColor;