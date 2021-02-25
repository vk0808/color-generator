import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

import styled from "styled-components";

const Slider = styled.input.attrs({
  type: "range",
  min: "1",
  max: "30",
  title: "Choose Shades"
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 12px;
  border-radius: 40px;
  padding: 0;
  background: ${(props) =>
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${
      (props.value * 100) / 30 + 1
    }%, #fff ${(props.value * 100) / 30 + 1}%, #fff 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
`;

import "./styles.css";

export default function App() {
  const [color, setColor] = useState("");
  const [rangeVal, setRangeVal] = useState(20);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#ff0000").all(rangeVal));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(rangeVal);
      console.log(rangeVal, colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  handleChange = (e) => {
    const value = parseInt(e.target.value);
    setRangeVal(value);
    console.log(value, rangeVal);
    color === ""
      ? setList(new Values("#ff0000").all(value))
      : setList(new Values(color).all(value));
    // console.log(list, rangeVal);
  };
  return (
    <div className="App">
      <h3>color generator</h3>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            title="Enter color"
            placeholder="#ff0000, red, rgb(255, 0, 0)"
            className={`${error ? "error" : null}`}
            onChange={(e) => {
              setColor(e.target.value);
              setError(false);
            }}
          />
          <button className="btn" type="submit">
            Generate
          </button>
          <div className="slider">
            <Slider value={rangeVal} onChange={handleChange} />
            <span>{rangeVal}</span>
          </div>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              length={Math.floor(100 / rangeVal)}
            />
          );
        })}
      </section>
    </div>
  );
}
